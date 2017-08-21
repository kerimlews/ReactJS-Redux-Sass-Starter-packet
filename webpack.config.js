var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        path : path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-2']
                }
            },
            {
                test: /\.sass$/,
                loader: ['style-loader','css-loader','sass-loader'] //ExtractTextPlugin.extract('style-loader', 'css?importLoaders=1&-autoprefixer!postcss!sass-loader')// 
            }
        ]
    },
    /*plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ] */
}
