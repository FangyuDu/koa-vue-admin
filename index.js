const babelConfig = require('./babelConfig')
require('babel-core/register')(babelConfig)

const N = require('./config')
require('./server')(N)
