
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: '/',
        ignore: ['.*']
      }
    ])
  ],
  devServer: {
    host: 'localhost',
    port: "8888",
    open: true,
    hot: true
  }
})
