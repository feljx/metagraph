const { resolve } = require('path')

const FOLDER_SOURCE = resolve(process.cwd(), 'src')
const FOLDER_OUTPUT = resolve(process.cwd(), 'dist')
const FILE_SOURCE = 'main.ts'
const FILE_OUTPUT = 'app.js'
const STATIC_ASSETS_FOLDER_NAME = 'assets'
const PACKAGE_JSON = 'package.json'
const INDEX_HTML = 'index.html'
const STYLE_CSS = 'style.css'

//
// Project config
//

const config = {
    file: {
        source: FILE_SOURCE,
        output: FILE_OUTPUT
    },
    folder: {
        source: resolve(process.cwd(), 'src'),
        output: resolve(process.cwd(), 'dist')
    },
    static: {
        packageJson: {
            source: resolve(FOLDER_SOURCE, STATIC_ASSETS_FOLDER_NAME, PACKAGE_JSON),
            output: resolve(FOLDER_OUTPUT, PACKAGE_JSON)
        },
        indexHtml: {
            source: resolve(FOLDER_SOURCE, STATIC_ASSETS_FOLDER_NAME, INDEX_HTML),
            output: resolve(FOLDER_OUTPUT, INDEX_HTML)
        },
        styleCss: {
            source: resolve(FOLDER_SOURCE, STATIC_ASSETS_FOLDER_NAME, STYLE_CSS),
            output: resolve(FOLDER_OUTPUT, STYLE_CSS)
        }
    }
}

module.exports = {
    config
}
