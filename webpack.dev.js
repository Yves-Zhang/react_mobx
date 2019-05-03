const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const hostConfig = require('./bin/server.config');
const webpack = require('webpack');

const webpackDev = {
    entry: ['webpack-hot-middleware/client.js', './src/index.jsx'],
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: "http://" + hostConfig.host + ":" + hostConfig.port
        })
    ]
};

module.exports = merge(webpackConfig, webpackDev);