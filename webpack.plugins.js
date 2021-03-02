const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = [ new ForkTsCheckerWebpackPlugin(), new ReactRefreshWebpackPlugin() ]
