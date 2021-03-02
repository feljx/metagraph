import { Model } from '../abstract/Model'
import { BrowserWindowConstructorOptions } from 'electron'

export class ApplicationModel extends Model {
    public windowOptions: BrowserWindowConstructorOptions = {
        width: 1200,
        height: 800,
        frame: false,
        webPreferences: {
            contextIsolation: true
        }
    }
}
