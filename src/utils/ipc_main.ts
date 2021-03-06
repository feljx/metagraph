import { app, ipcMain } from 'electron'
import { Channels, ApplicationMessages } from '../types/ipc'

ipcMain.on(Channels.Message, (ev, msg) => {
    switch (msg) {
        case ApplicationMessages.Quit:
            app.quit()
        default:
            break
    }
})
