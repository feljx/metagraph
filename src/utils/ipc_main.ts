import { app, ipcMain } from 'electron'
import { Channels, ApplicationMessages } from '../types/ipc'

ipcMain.on('async-message', (ev, msg) => {
    console.log('RECEIVE')
    switch (msg) {
        case ApplicationMessages.Quit:
            app.quit()
        default:
            break
    }
})
