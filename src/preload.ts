// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  selectDirectory: () => ipcRenderer.invoke('select-directory'),
  syncDirectory: (folderPath: string) => ipcRenderer.send('sync-directory', folderPath),
  login: () => ipcRenderer.invoke('login-request'),
});
