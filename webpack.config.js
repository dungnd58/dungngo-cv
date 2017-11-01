var path = require('path');
var webpack = require('webpack');
//var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, './src/js/main.js')
        ]
    },
    devtool: 'source-map',
    output: {
        pathinfo:  true,
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'main.js'
    },
    watch: true,
    plugins: [
        definePlugin,
        new UglifyJsPlugin({
            test: /\.js$/,
            sourceMap: false,
            parallel: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            }, {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }],
                }),
            }, {
                test: /\.jade$/,
                use: {
                    loader: "jade-loader"
                }
            }
        ]
    }
}

