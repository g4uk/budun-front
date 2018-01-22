// весь наш застосунок буде в папці app
// вхідною точкою нашого застосунку буде файл app/index.js
// бандлитись все буде в папку dist/bundle.js

var path = require('path');
var webpack = require('webpack');

const fs  = require('fs');
const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './app/theme.less'), 'utf8'));

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: path.join(__dirname, 'app'),
            query: {
                presets:['stage-2', 'react']
            }
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader",
                options: {
                    modifyVars: themeVariables
                }
            }]
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'react-svg-loader'
            }]
        }]
    }

};