import { app, BrowserWindow } from 'electron'
import { AppModel } from '../models'
import { Controller } from './index'
import { WindowController } from './window'

export class AppController extends Controller {
    private windows: WindowController[] = []

    constructor (model: AppModel) {
        super()
        app.whenReady().then(this.instantiateWindow)
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

    instantiateWindow () {
        this.windows.push(new WindowController())
    }
}
