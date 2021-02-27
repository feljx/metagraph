import { Model } from '../abstract/model'
import { BrowserWindowConstructorOptions } from 'electron'

export class ApplicationModel extends Model {
    public windowOptions: BrowserWindowConstructorOptions = {
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    }
}
