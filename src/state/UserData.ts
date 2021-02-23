import { resolve } from 'path'
import { writeFile, unlink, mkdir, stat, rmdir } from 'fs'
import { app } from 'electron'

//
// UserData
//

export class UserData {
    private appName = app.getName()
    private appDataFolder = resolve(app.getPath('home'), 'local', this.appName)
    private appDataVersion = [ ...app.getVersion() ]
        .map((c) => ([ '.', ',', '-', '!', '/', '\\' ].includes(c) ? '_' : c))
        .join('')
    private appDataFile = resolve(this.appDataFolder, `${this.appDataVersion}.json`)

    async ensureAppDataFolder () {
        return new Promise<void>((resolve, reject) => {
            stat(this.appDataFolder, (err, stats) => {
                if (err) {
                    mkdir(this.appDataFolder, (err) => {
                        if (err) {
                            reject(new Error(`ERROR creating output folder: ${err}`))
                        }
                        resolve()
                    })
                }
                else {
                    if (stats.isDirectory()) {
                        resolve()
                    }
                    else {
                        reject(
                            new Error(`Specified output folder path isn't a directory.`)
                        )
                    }
                }
            })
        })
    }
    async save (data: any) {
        await this.ensureAppDataFolder()
        return new Promise<void>((resolve, reject) => {
            writeFile(this.appDataFile, this.fileFormat(data), (err) => {
                if (err) reject(err)
                resolve()
            })
        })
    }
    async delete () {
        return new Promise<void>((resolve, reject) => {
            unlink(this.appDataFile, (err) => {
                if (err) reject(err)
                resolve()
            })
        })
    }
    fileFormat (data: any) {
        return JSON.stringify(data)
    }
}
