const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack")

const webpackPro = {
    entry: ['./src/index.jsx'],
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = merge(webpackConfig, webpackPro);