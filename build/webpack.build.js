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
    path: path.resolve(__dirname, '../dist'),
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
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff|otf|eot|tff)$/,
        use: [ 'file-loader?name=images/[name].[ext]' ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DefinePlugin({
      prod: JSON.stringify(true)
    }),
    new VueLoaderPlugin()
  ]
}
