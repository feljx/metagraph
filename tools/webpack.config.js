const path = require('path')
const { config } = require('./config')
const entryApp = './src/Application/main.ts'
const entryWindow = './src/Window/main.ts'

const Config = (entry, target) => ({
    entry,
    target,
    devtool: 'source-map',
    mode: true ? 'development' : 'production',
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
        path: path.resolve(__dirname, config.folderOut)
    }
})

module.exports = [
    Config({ application: entryApp }, 'electron-main'),
    Config({ window: entryWindow }, 'electron-renderer')
]

module.exports.parallelism = 2

// {
//     entry: {
//         application: entryApp,
//         window: entryWindow
//     },
//     target: 'electron-main',
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     resolve: {
//         extensions: [ '.tsx', '.ts', '.js' ]
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, config.folder.output)
//     }
// }
