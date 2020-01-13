var webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: {
    bundle1: './index1.js',
    bundle2: './index2.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 2000,
      minChunks: 1
    }
  }
}
