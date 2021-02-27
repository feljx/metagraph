const { stat, mkdir, copyFile } = require('fs')
const webpack = require('webpack')
const { config } = require('./config')
const webpack_config = require('./webpack.config.js')

// Execution here
main()

async function main () {
    try {
        const stats = await runWebpack()
        const webpackErrors = stats.compilation.errors
        if (webpackErrors.length > 0) {
            throw webpackErrors[0]
        }
        await ensureOutputFolderExists()
        // iterate through static asset config
        // copy using source and output paths defined by each config
        for (const assetConfig of Object.values(config.static)) {
            const { source, output } = assetConfig
            await copyStaticFile(source, output)
        }
    } catch (error) {
        console.log(error)
    }
}

function runWebpack () {
    return new Promise((resolve, reject) => {
        const compiler = webpack(webpack_config)
        compiler.run((err, stats) => {
            if (err) {
                reject(new Error(`ERROR in webpack build: ${err}`))
            }
            resolve(stats)
        })
    })
}

function ensureOutputFolderExists (path) {
    return new Promise((resolve, reject) => {
        stat(config.folder.output, (err, stats) => {
            if (err) {
                mkdir(config.folder.output, (err) => {
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
                    reject(new Error(`Specified output folder path isn't a directory.`))
                }
            }
        })
    })
}

function copyStaticFile (source, dest) {
    return new Promise((resolve, reject) => {
        copyFile(source, dest, (err) => {
            if (err) {
                reject(new Error(`ERROR copying app package.json: ${err}`))
            }
            resolve()
        })
    })
}
