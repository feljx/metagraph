export interface ConfigState {
    width: number
    height: number
    webPreferences: any
}

const defaultConfig: ConfigState = {
    width: 1200,
    height: 800,
    webPreferences: {
        nodeIntegration: true
    }
}

export class Config {
    private state: ConfigState = defaultConfig
    public getElectronWindowOptions () {
        return {
            width: this.state.width,
            height: this.state.height,
            webPreferences: this.state.webPreferences
        }
    }
}
