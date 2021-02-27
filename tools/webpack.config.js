const path = require('path')
const { config } = require('./config')

const entryApp = './src/Application/main.ts'
const entryWindow = './src/Window/main.ts'
const entryPath = `${config.folder.source}/${config.file.source}`

module.exports = {
    entry: {
        application: entryApp,
        window: entryWindow
    },
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, config.folder.output)
    }
}
