import koa from 'koa'
import chalk from 'chalk'
import ks from 'koa-static'
import mount from 'koa-mount'
import routes from './routes'
import controller from './controller'

const app = new koa()

// 中间件
import log from './mid/log'

module.exports = function (N) { 
  app.use(log)
  app.use(mount('/static', ks(N.static)))
  app.use(routes.routes())
  app.listen(8080, () => {
    console.log(chalk.green('服务器已启动，端口：8080'))
  })
}
