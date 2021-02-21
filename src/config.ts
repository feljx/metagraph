export interface IConfig {
    width: number
    height: number
    webPreferences: any
}

export const defaultConfig: IConfig = {
    width: 1200,
    height: 800,
    webPreferences: {
        nodeIntegration: true
    }
}
