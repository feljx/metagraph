import { ipcRenderer } from 'electron'
// import { Channels } from '../types/ipc'

export const sendMessage = (msg: string) => () => ipcRenderer.send('async-message', msg)
// export const sendMessage = (msg: string) => () => ipcRenderer.send(Channels.Message, msg)
