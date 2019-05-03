const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

const webpackPro = {
    entry: ['./src/index.jsx'],
    mode: 'production'
};

module.exports = merge(webpackConfig, webpackPro);