'use strict';

var path = require("path"),
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client', 'index.html'),
        filename: path.resolve(__dirname, 'dist', 'index.html'),
        inject: 'body'
    });

module.exports = {
    entry: './client/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};