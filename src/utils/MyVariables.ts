const vitePort = import.meta.env.VITE_PORT;
const urlBackend = import.meta.env.VITE_SERVER_URL;

export const env = {
  vitePort,
  urlBackend,
};

export const timeoutCallApi = 60000; // timeout call api 60s
