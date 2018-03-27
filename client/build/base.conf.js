const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (N) {
  return {
    mode: 'development',
    entry: path.join(N.client, 'web'),
    output: {
      path: path.join(N.dist, 'js'),
      filename: 'app.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', 'scss'],
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(N.client, 'web')]
      }, {
        test: /\.(png|jep?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: path.posix.join('static', 'img/[name].[hash:8].[ext]')
        }
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }]
    }
  }
}