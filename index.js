const path = require('path')
const babelConfig = require('./babelConfig')
require('babel-core/register')(babelConfig)

const N = {
  host: 'localhost',
  port: '8080',
  devPort: '8081',
  client: path.join(__dirname, 'client'),
  server: path.join(__dirname, 'server'),
  static: path.join(__dirname, 'static')
}

require('./server')(N)