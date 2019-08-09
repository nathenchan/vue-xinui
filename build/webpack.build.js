const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const entry = require('../src/componets.json')

module.exports = {
  mode:'production', // development production
  entry,
  output:{
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: 'xinui', // 暴露库模块到全局
    libraryTarget: 'umd'
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
    new CleanWebpackPlugin(['lib'],{
      root: path.resolve(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: '../lib/styles/[name].css'
    }),
    new VueLoaderPlugin()
  ]
}
