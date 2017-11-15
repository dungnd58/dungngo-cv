var path = require('path');
var webpack = require('webpack');
//var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/js/main.js',
    cache: false,
    devtool: 'source-map',
    output: {
        pathinfo:  true,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/main.js'
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            }, {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                            minimize: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                }),
            }, {
                test: /\.jade$/,
                use: {
                    loader: "jade-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My CV',
            filename: 'index.html',
            template: 'index.jade',
            inject: false,
            cache: false
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css'
        })
    ],
    // node: {
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty'
    // }
}