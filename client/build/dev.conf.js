const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (N) {
  let dev = {
    mode: 'development',
    entry: path.join(N.client, 'web'),
    output: {
      path: path.join(N.dist, 'js'),
      filename: 'app.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', 'scss'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        $nm: path.join(N.dist, 'node_modules')
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
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
        }]
      }, {
        test: /\.(jpe?g|png|gif|svg)(\?\S*)?$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: path.posix.join(N.dist, 'img/[name].[hash:8].[ext]')
          }
        }]
      }, {
        test: /\.(eot|ttf|woff)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8192,
            name: path.posix.join('dist', 'fonts/[name].[hash:8].[ext]')
          }
        }]
      }]
    },
    devServer: {
      clientLogLevel: 'error',
      hot: true,
      inline: true,
      compress: true,
      port: N.devPort,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      watchOptions: {
        poll: true,
        ignored: /node_modules/
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(N.client, 'temp/index.html'),
        inject: 'body',
        env: 'development'
      })
    ]     
  }
  return dev
}
