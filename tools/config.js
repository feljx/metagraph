const { resolve } = require('path')

const SRC_FOLDER = './src'
const OUT_FOLDER = resolve(process.cwd(), 'dist')
const INDEX_HTML = 'index.html'
const STYLE_CSS = 'style.css'
const PACKAGE_JSON = 'package.json'

const sources = {
    sourceFile: 'main.ts',
    sourceFolder: SRC_FOLDER,
    sourcePackageJson: resolve(__dirname, PACKAGE_JSON),
    sourceIndexHtml: resolve(SRC_FOLDER, INDEX_HTML),
    sourceCss: resolve(SRC_FOLDER, STYLE_CSS)
}

const outputs = {
    outFile: 'app.js',
    outFolder: OUT_FOLDER,
    outPackageJson: resolve(OUT_FOLDER, PACKAGE_JSON),
    outIndexHtml: resolve(OUT_FOLDER, INDEX_HTML),
    outCss: resolve(OUT_FOLDER, STYLE_CSS)
}

module.exports = {
    ...sources,
    ...outputs
}
