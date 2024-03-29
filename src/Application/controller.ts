import { app, BrowserWindow, screen } from 'electron'
import { ApplicationModel } from './model'
import { Controller } from '../abstract/Controller'
declare const MAIN_WINDOW_WEBPACK_ENTRY: any

export class ApplicationController extends Controller {
    private windows: BrowserWindow[] = []

    constructor (private model: ApplicationModel) {
        super()
        this.init()
    }

    init () {
        app.on('ready', this.instantiateWindow)
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.instantiateWindow()
            }
        })
    }

    // instance method using direct assignment of a lambda to avoid problems with 'this'
    instantiateWindow = () => {
        const electronWindow = new BrowserWindow(this.model.windowOptions)

        // Open the DevTools.
        electronWindow.webContents.openDevTools()

        // and load the index.html of the app.
        electronWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
        this.windows.push(electronWindow)
        // electronWindow.on('ready-to-show', this.moveWindow)
    }

    moveWindow = () => {
        const window = this.windows[0]
        const display = screen.getPrimaryDisplay()
        const displays = screen.getAllDisplays()
        // console.log(displays)
    }
}
