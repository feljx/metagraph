import { app, BrowserWindow, Menu } from 'electron'

export class App {
    private
    private windows: BrowserWindow[] = []
    createWindow () {
        this.windows.push(new BrowserWindow())
    }
}

function createWindow () {
    const win = new BrowserWindow()

    win.loadFile('index.html')
    // win.webContents.send()
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
