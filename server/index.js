const koa = require('koa')
const app = new koa()
const chalk = require('chalk')
app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(8080, () => {
  console.log(chalk.green('服务器已启动，端口：8080'))
})