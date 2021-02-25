import { app, BrowserWindow, Menu } from 'electron'
import { BrowserWindowConstructorOptions } from 'electron'

export class App {
    private windows: BrowserWindow[] = []

    constructor () {
        app.whenReady().then(this.createWindow)
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow()
            }
        })
    }

    createWindow = (options: BrowserWindowConstructorOptions) => {
        const window = new BrowserWindow(options)
        window.loadFile('index.html')
        this.windows.push(window)
    }
}
