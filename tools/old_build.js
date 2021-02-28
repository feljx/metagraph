const { stat, mkdir, copyFile } = require('fs')
const webpack = require('webpack')
const { config } = require('./config')
const webpack_config = require('./webpack.config.js')

// Execution here
main()

async function main () {
    try {
        await ensureOutputFolderExists()
        // iterate through static asset config
        // copy using source and output paths defined by each config
        for (const assetConfig of Object.values(config.static)) {
            const { source, output } = assetConfig
            await copyStaticFile(source, output)
        }

        // WATCH ONLY
        const compiler = webpack(webpack_config)
        let compilationNum = 0
        compiler.watch({}, (err, multistats) => {
            if (err) throw err
            const ordinals = [ 'st', 'nd', 'rd', 'th' ]
            const ordinal = ordinals[compilationNum++ % 10] || ordinals[3]
            console.log(`${compilationNum}${ordinal} compilation`)
            // @ts-ignore
            const isMultistats = multistats.stats && multistats.stats instanceof Array
            if (isMultistats) {
                // @ts-ignore
                for (const compilationStats of multistats.stats) {
                    const webpackErrors = compilationStats.compilation.errors
                    if (webpackErrors.length > 0) {
                        throw webpackErrors[0]
                    }
                }
            }
        })

        // BUILD ONLY
        // const stats = await runWebpack()
        // const webpackErrors = stats.compilation.errors
        // if (webpackErrors.length > 0) {
        //     throw webpackErrors[0]
        // }
    } catch (error) {
        console.log(`Couldn't run Webpack: ${error}`)
    }
}

// WATCH
function* watchWebpack () {
    yield new Promise((resolve, reject) => {
        const compiler = webpack(webpack_config)
        compiler.watch({}, (err, stats) => {
            if (err) reject(err)
            resolve(stats)
        })
    })
}

// BUILD ONLY
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
