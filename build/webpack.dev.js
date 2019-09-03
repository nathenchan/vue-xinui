const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry:{
    index:'./examples/entry/index.js'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: [ "vue-loader"]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff|otf|eot|tff)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: './', // 
    hot: true
  },
  resolve: {
    alias: {
      'packages': path.resolve(__dirname, '../packages/')
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./examples/html/dev.html'
    }),
    new VueLoaderPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
