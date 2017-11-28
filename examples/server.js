const path = require('path')
const http = require('http')
const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const koaWebpck = require('koa-webpack')
const opn = require('opn')
const webpackConfig = require(path.join(process.cwd(), 'webpack.config'))
const webRoot = path.resolve(process.cwd(), 'webapp')
const config = {
    cluster: false,
    port: 4000,
    pkg: {
        name: 'double'
    },
    ip: '0.0.0.0',
    cdn: '/'
}

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(koaWebpck({
    config: webpackConfig
}))

app.use(serve(webRoot))

http.createServer(app.callback()).listen(config.port)

let uri = 'http://' + config.ip + ':' + config.port + (/^\/$/.test(config.cdn) ? config.cdn : config.cdn + '/')

console.info(config.pkg.name + ' is listening on ' + uri)

opn(uri)