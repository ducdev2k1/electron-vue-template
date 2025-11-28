import axios from 'axios';
import chokidar from 'chokidar';
import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import started from 'electron-squirrel-startup';
import path from 'node:path';
import { env } from 'node:process';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}
let mainWindow: BrowserWindow;
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // 🔥 CẦN THIẾT
      nodeIntegration: false, // 🔥 CẦN THIẾT
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// dialog selected folder
ipcMain.handle('select-directory', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });
  return result.canceled ? null : result.filePaths[0];
});

ipcMain.on('sync-directory', (event, folderPath: string) => {
  console.log('📁 Sync directory:', folderPath);
  const watcher = chokidar.watch(folderPath, {
    ignored: /(^|[\/\\])\../, // Ignore hidden files
    persistent: true,
    usePolling: true,
    interval: 100,
    ignoreInitial: false, // 👈 sẽ quét các file đã có khi khởi tạo
  });

  watcher.on('add', (filePath) => {
    console.log('🟢 New file or existing file:', filePath);
    uploadFile(filePath);
  });

  watcher.on('change', (filePath) => {
    console.log('🔄 File changed:', filePath);
  });

  watcher.on('unlink', (filePath) => {
    console.log('🗑️ File deleted:', filePath);
  });

  watcher.on('error', (error) => {
    console.log('❌ Watcher Error:', error);
  });
});

const uploadFile = async (filePath: string) => {
  const COOKIE =
    'onemail-auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiZHVjbmRAaW5ldC52biIsIndlYm1haWwiOiJ3ZWJtYWlsLmluZXQudm4iLCJkb21haW4iOiJpbmV0LnZuIiwiZmluZ2VyUHJpbnRJZCI6IjM5MGU2MWQ3MmQ0ZDc1MTcwNjAxZDEzOTQxZGM2OTM1IiwiaWF0IjoxNzUyMzk5ODU2fQ.xw9_ZfY_rOLsBwBUSYsH6Zn2Eij0L4tIlKjzI5YhxPc'; // Cookie bạn copy ở cURL

  const fileName = filePath.replace(/\\/g, '/'); // Fix path for Windows

  const payload = {
    data: {
      fileName: fileName, // VD: Telegram Desktop/image.png
      nameAction: 'upload_custom',
    },
  };

  try {
    const response = await axios.post(`${env.urlBackend}/api/v1/user-fm-fast-upload-file`, payload, {
      headers: {
        'content-type': 'application/json',
        accept: 'application/json, text/plain, */*',
        origin: 'https://workspace.inet.vn',
        referer: 'https://workspace.inet.vn/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        cookie: COOKIE,
      },
    });
    console.log('🚀 main.ts ~ response :>>', response);
  } catch (err: any) {
    console.error(`❌ Upload failed: ${fileName}`, err?.response?.data || err.message);
  }
};

ipcMain.handle('login-request', async () => {
  const loginWindow = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  loginWindow.loadURL('https://webmail.inetdev.io.vn/login');

  loginWindow.webContents.on('did-navigate', (event, url) => {
    console.log('Login window navigated to:', url);
    // Check if navigated to the main webmail page (indicating success)
    // Adjust this condition based on the actual redirect URL
    if (url === 'https://webmail.inetdev.io.vn/' || url.includes('/#')) {
      console.log('Login successful, closing login window');
      loginWindow.close();
      mainWindow.focus();
      mainWindow.reload(); // Optional: reload main window to update state
    }
  });
});
