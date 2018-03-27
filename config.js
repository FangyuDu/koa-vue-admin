const path = require('path')

module.exports = {
  host: 'localhost',
  port: '8080',
  devPort: '8081',
  client: path.join(__dirname, './client'),
  server: path.join(__dirname, './server'),
  static: path.join(__dirname, './static'),
  dist: path.join(__dirname, './dist')
}