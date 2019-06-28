const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode:'development',
  entry:{
    index:'./src/index.js'
  },
  output:{
    path: path.resolve(__dirname, '../dist'),
    filename: 'xinui.js',
    library: 'xinui',
    libraryTarget: 'umd'
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
        use: [ 'file-loader?name=images/[name].[ext]' ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
