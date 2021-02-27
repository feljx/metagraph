const path = require('path')
const { config } = require('./config')
const entryApp = './src/Application/main.ts'
const entryWindow = './src/Window/main.ts'
const entryPath = `${config.folder.source}/${config.file.source}`

function Config (entry, target) {
    return {
        entry,
        target,
        devtool: 'source-map',
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
}

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
