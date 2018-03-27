const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConf = require('./base.conf')

module.exports = function (N) {
  let prod = {
    mode: 'production',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(N.client, 'temp/index.html'),
        inject: 'body',
        env: 'product'
      })
    ]
  }
  let temp = {}
  Object.assign(temp, baseConf(N), prod)
  return prod
}