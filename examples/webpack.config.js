const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'app.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'webapp'),
        publicPath: "/"
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            'vue-scroll-load': path.resolve(__dirname, '..', 'src')
        }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            template: './index.html',
        })
    ]
}