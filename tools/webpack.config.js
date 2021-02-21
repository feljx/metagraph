const path = require('path')

const config = require('./config')
const entry_path = `${config.sourceFolder}/${config.sourceFile}`

module.exports = {
    entry: {
        electron: entry_path,
        react: './src/react/app.tsx'
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
        path: path.resolve(__dirname, config.outFolder)
    }
}
