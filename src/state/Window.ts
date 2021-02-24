//
// Window state
//

import { BrowserWindowConstructorOptions } from 'electron'

const defaultWindowOptions: BrowserWindowConstructorOptions = {
    width: 1200,
    height: 800,
    webPreferences: {
        nodeIntegration: true
    }
}

export class Window {
    constructor (
        private electronOptions: BrowserWindowConstructorOptions = defaultWindowOptions
    ) {}
    public getElectronOptions () {
        return this.electronOptions
    }
}
