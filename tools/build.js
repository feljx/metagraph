const { stat, mkdir, copyFile } = require('fs')
const { resolve } = require('path')
const copyExtra = require('fs-extra').copy
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const { config } = require('./config')

// Execution here
const [ , , , mode ] = process.argv
const [ DEV, PROD ] = [ 'mode=dev', 'mode=prod' ]
// Build with one of the two functions
buildProject()

// Build project in selected mode
async function buildProject () {
    try {
        await ensureOutputFolderExists(config.folderOut)
        const compiler = webpack(webpackConfig)
        if (mode === DEV) bundleDev(compiler)
        else if (mode === PROD) bundleProd(compiler)
        else throw new Error(`Wrong build mode: ${mode}`)
    } catch (error) {
        console.log(error)
    }
}

// Run webpack in development mode
function bundleDev (compiler) {
    console.log('Bundling for development...')
    let compilationNum = 0
    compiler.watch({}, (err, multistats) => {
        if (err) throw err
        const ordinals = [ 'st', 'nd', 'rd', 'th' ]
        const ordinal = ordinals[compilationNum++ % 10] || ordinals[3]
        console.log(`${compilationNum}${ordinal} compilation`)
        const isMultistats = multistats.stats && multistats.stats instanceof Array
        if (isMultistats) {
            for (const compilationStats of multistats.stats) {
                const webpackErrors = compilationStats.compilation.errors
                if (webpackErrors.length > 0) {
                    throw webpackErrors[0]
                }
            }
        }
        copyAssets()
    })
}

// Run webpack in production mode
function bundleProd (compiler) {
    console.log('Bundling for production...')
    compiler.run((err, stats) => {
        if (err) {
            throw new Error(`ERROR in webpack build: ${err}`)
        }
        const webpackErrors =
            stats &&
            stats.compilation &&
            stats.compilation.errors &&
            stats.compilation.errors
        if (webpackErrors && webpackErrors.length > 0) {
            throw webpackErrors[0]
        }
        copyAssets()
    })
}

function copyAssets () {
    copyExtra(config.folderStatic, config.folderOut)
}

// Copy static asset file
function copyStaticAsset (source, dest) {
    return new Promise((resolve, reject) => {
        copyFile(source, dest, (err) => {
            if (err) {
                reject(new Error(`ERROR copying app package.json: ${err}`))
            }
            resolve()
        })
    })
}

// Create output folder or make sure one exists
function ensureOutputFolderExists (path) {
    return new Promise((resolve, reject) => {
        stat(config.folderOut, (err, stats) => {
            if (err) {
                mkdir(config.folderOut, (err) => {
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
