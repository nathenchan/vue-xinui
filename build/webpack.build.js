const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode:'development',
  entry:{
    index:'./src/index.js'
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
  plugins:[
    new VueLoaderPlugin()
  ]
}
