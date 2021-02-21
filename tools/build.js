const { stat, mkdir, copyFile } = require('fs')
const webpack = require('webpack')
const config = require('./config')
const webpack_config = require('./webpack.config.js')

// Execution begins here
main()

async function main () {
    try {
        const stats = await runWebpack()
        const webpackErrors = stats.compilation.errors
        if (webpackErrors.length > 0) {
            throw webpackErrors[0]
        }
        await createOutputFolder()
        await copyStaticFile(config.sourceIndexHtml, config.outIndexHtml)
        await copyStaticFile(config.sourcePackageJson, config.outPackageJson)
        await copyStaticFile(config.sourceCss, config.outCss)
    } catch (error) {
        console.log(error)
    }
}

function runWebpack () {
    return new Promise((resolve, reject) => {
        webpack(webpack_config, (err, stats) => {
            if (err) {
                reject(new Error(`ERROR in webpack build: ${err}`))
            }
            resolve(stats)
        })
    })
}

function createOutputFolder (path) {
    return new Promise((resolve, reject) => {
        stat(config.outFolder, (err, stats) => {
            if (err) {
                mkdir(config.outFolder, (err) => {
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
