import { app, BrowserWindow } from 'electron'
import { ApplicationModel } from './model'
import { Controller } from '../abstract/controller'

export class ApplicationController extends Controller {
    private windows: BrowserWindow[] = []

    constructor (private model: ApplicationModel) {
        super()
        this.init()
    }

    init () {
        app.whenReady().then(this.instantiateWindow).catch((err) => {
            console.log(`Couldn't open first window: ${err}`)
        })
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
        // just "index.html" because the electron bundle will be at the same level as index.html
        electronWindow.loadFile('index.html').catch((err) => {
            console.log(`Couldn't instantiate window: ${err}`)
        })
        this.windows.push(electronWindow)
    }
}
