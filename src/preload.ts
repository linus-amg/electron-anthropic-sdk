// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  triggerAnthropicSDK: (apiKey: string, message: string) => ipcRenderer.invoke('trigger-anthropic-sdk', apiKey, message)
})


