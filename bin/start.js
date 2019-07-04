const express = require('express'); //引入express 
const path = require('path'); // 引入path 
const webpack = require('webpack');
const config = require('../webpack.dev');
const hostConfig = require('./server.config');
const proxyMiddleWare = require('http-proxy-middleware');

//给webpack带上配置
const compiler = webpack(config);
//自动更新编译代码中间件
const devMiddleWare = require('webpack-dev-middleware')(compiler, {});
//自动刷新浏览器中间件
const hotMiddleWare = require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
});

const port = hostConfig.port;
const host = hostConfig.host;

const app = express(); // 初始化

//调用2个中间件
app.use(devMiddleWare);
app.use(hotMiddleWare);

// 加载代理配置
if (hostConfig.proxy && hostConfig.proxy.length !== 0) {
    hostConfig.proxy.forEach(item => {
        app.use(item.path, proxyMiddleWare(item.option))
    })
}

// app.use(express.static(require('path').join(__dirname, '../dist')));

app.listen(port, host, () => {
    console.log("Server running at http://%s:%s", host, port)
});