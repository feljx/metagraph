const { ipcRenderer } = require('electron')

// const sendMessage = (msg: string) => () => ipcRenderer.send(, msg)
const sendMessage = (msg) => () => ipcRenderer.send('async-message', msg)

window.sendMessage = sendMessage

window.foo = 'babaloo'

console.log('PRELOAD', window.sendMessage)
