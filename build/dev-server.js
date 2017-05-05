
var config = require('../config')
//设置环境变量
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

//设置端口
var port = process.env.PORT || config.dev.port

var server = express()
var compiler = webpack(webpackConfig)

//热重载
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

//热增量
var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
//html文件改变时页面重载
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

var context = config.dev.context
var proxypath = config.dev.proxypath

var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    //代理
    server.use(proxyMiddleware(context, options))
}

// server.use(proxyMiddleware('/*/*', {
//     target: 'https://mainsite-restapi.ele.me',
//     changeOrigin: true,
//     secure: false,
// }))


// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')())

// serve webpack bundle output
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 请求静态资源的时候在前面加上/static
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        //opn(uri)
    }
})