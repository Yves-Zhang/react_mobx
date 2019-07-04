const config = {
    host: '127.0.0.1',
    port: 8989,
    proxy: [{
        path: '/api',
        option: {
            target: 'http://127.0.0.1:8989',
            pathRewrite: {
                '^/api': "/"
            },
            changeOrigin: true
        }
    }]
}

module.exports = config;