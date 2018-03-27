const webpack = require('webpack')
const wds = require('webpack-dev-server')
const devConfig = require('./build/dev.conf')

module.exports = function (N) {
  const dev = devConfig(N)
  const compiler = webpack(dev)
  let server = new wds(compiler, dev.devServer)
  server.listen(N.devPort)
}
