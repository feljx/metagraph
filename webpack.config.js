const { resolve } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

// User configuration
const SOURCE_DIRECTORY = resolve(__dirname, 'src')
const ASSET_DIRECTORY = resolve(SOURCE_DIRECTORY, 'assets')
const ENTRY = resolve(SOURCE_DIRECTORY, 'index.ts')
const HTML_TEMPLATE = resolve(ASSET_DIRECTORY, 'index.html')
const PRODUCTION_DIRECTORY = resolve(__dirname, 'docs')

// Exported Webpack configurations
module.exports = [
    // PRODUCTION
    Config({
        name: 'prod',
        mode: 'production',
        output: {
            path: PRODUCTION_DIRECTORY,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Template',
                template: HTML_TEMPLATE
            }),
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            })
            // COPY STATIC ASSETS HERE
            // new CopyPlugin({
            //     patterns: [ { from: ASSET_PATH, to: TARGET_PATH } ]
            // }),
        ]
    }),
    // DEVELOPMENT
    Config({
        name: 'dev',
        mode: 'development',
        output: {
            path: resolve(__dirname, 'dev'),
            filename: '[name].js'
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Template',
                template: HTML_TEMPLATE
            }),
            // COPY STATIC ASSETS HERE
            // new CopyPlugin({
            //     patterns: [ { from: ASSET_PATH, to: TARGET_PATH } ]
            // }),
            new HotModuleReplacementPlugin()
        ]
    })
]

// Webpack configuration factory
// TODO: Clean up later, proper merging
function Config (moreOptions) {
    const isDev = moreOptions.name === 'dev'
    // Return configuration
    return {
        // ENTRY
        entry: ENTRY,
        // FILE EXTENSIONS
        resolve: {
            extensions: [ '.ts', '.tsx', '.js', '.json' ]
        },
        // MODULE
        module: {
            rules: [
                // LOAD JAVASCRIPT / TYPESCRIPT
                {
                    test: /\.m?(j|t)sx?$/,
                    include: SOURCE_DIRECTORY,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript',
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                // LOAD CSS
                // 3 loaders: style-loader, css-loader, postcss-loader
                {
                    test: /\.css$/i,
                    include: resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                // CSS MODULES
                                modules: false
                            }
                        },
                        'postcss-loader'
                    ]
                }
            ]
        },
        optimization: {
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                // `...`,
                new CssMinimizerPlugin()
            ]
        },
        // MERGE GIVEN OPTIONS
        ...moreOptions
    }
}
