import { resolve } from 'path'
import { Model } from '../abstract/Model'
import { app, BrowserWindowConstructorOptions } from 'electron'

const pathPreload = [ app.getAppPath(), 'src', 'utils', 'ipc_preload.js' ].join('/')

export class ApplicationModel extends Model {
    public windowOptions: BrowserWindowConstructorOptions = {
        width: 1200,
        height: 800,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            preload: pathPreload
        }
    }
}
