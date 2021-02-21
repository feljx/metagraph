import { app, BrowserWindow, Menu } from 'electron'
import { defaultConfig } from './config'

type a = number | string

function createWindow () {
    const win = new BrowserWindow({
        ...defaultConfig
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
