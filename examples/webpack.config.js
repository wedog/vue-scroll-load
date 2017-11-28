const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
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
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, use: 'file-loader?name=assets/[name].[hash].[ext]' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader?sourceMap', fallback: 'style-loader' }) },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
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