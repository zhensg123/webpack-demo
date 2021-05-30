var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  }
}
