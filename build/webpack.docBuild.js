const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'production',
  entry:{
  	index:path.resolve(__dirname, '../examples/entry/index.js')
  },
  output:{
    path: path.resolve(__dirname, '../doc'),
    filename: 'js/[name].js',
    publicPath:'./'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: [ "vue-loader"]
      },
      {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/html/dev.html'
    }),
    new CleanWebpackPlugin(['doc'],{
      root: path.resolve(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: '../doc/css/[name].css'
    }),
    new VueLoaderPlugin()
  ]
}
