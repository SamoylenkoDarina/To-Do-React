var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.global\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        importLoaders: 1
                    }
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /^((?!.global).)*\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 3000
    },
};