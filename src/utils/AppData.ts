import { resolve } from 'path'
import { writeFile, unlink, mkdir, stat, rmdir, readFile } from 'fs'
import { app } from 'electron'

//
// UserData
//

export interface UserData {
    session: any
    view?: any
}

function isUserData (data: any): data is UserData {
    const validKeys = [ 'session', 'view' ]
    for (const key of Object.keys(data)) {
        if (!validKeys.includes(key)) {
            return false
        }
    }
    return true
}

export class AppData {
    static appName = app.getName()
    static appDataFolderPath = resolve(app.getPath('home'), 'local', AppData.appName)
    static appDataVersion = [ ...app.getVersion() ]
        .map((c) => ([ '.', ',', '-', '!', '/', '\\' ].includes(c) ? '_' : c))
        .join('')
    static appDataFilePath = resolve(AppData.appDataFolderPath, `${AppData.appDataVersion}.json`)

    static async loadAppData (): Promise<UserData> {
        return new Promise((resolve, reject) => {
            readFile(AppData.appDataFilePath, 'utf8', (err, data) => {
                if (err) {
                    reject(new Error(`Error reading Application Support / AppData file: ${err}`))
                } else {
                    data = JSON.parse(data)
                    if (!isUserData(data)) {
                        reject(new Error('Corrupted UserData file in Application Support / AppData'))
                    } else {
                        resolve(data)
                    }
                }
            })
        })
    }
    static async saveAppData (data: UserData) {
        await AppData.createAppDataFolder()
        return new Promise<void>((resolve, reject) => {
            const stringified = JSON.stringify(data)
            writeFile(AppData.appDataFilePath, stringified, (err) => {
                if (err) {
                    reject(err)
                }
                resolve()
            })
        })
    }
    static async createAppDataFolder () {
        return new Promise<void>((resolve, reject) => {
            stat(AppData.appDataFolderPath, (err, stats) => {
                if (err) {
                    mkdir(AppData.appDataFolderPath, (err) => {
                        if (err) {
                            reject(new Error(`ERROR creating output folder: ${err}`))
                        }
                        resolve()
                    })
                } else {
                    if (stats.isDirectory()) {
                        resolve()
                    } else {
                        reject(new Error(`Specified output folder path isn't a directory.`))
                    }
                }
            })
        })
    }
    async deleteAppData () {
        return new Promise<void>((resolve, reject) => {
            unlink(AppData.appDataFilePath, (err) => {
                if (err) {
                    reject(err)
                }
                resolve()
            })
        })
    }
}
