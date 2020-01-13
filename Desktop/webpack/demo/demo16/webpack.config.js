const FileListPlugin = require('./FileListPlugin.js')
// webpack.config.js
const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './index.js',
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'replaceloader',
            options: {
              name: 'GuoZhaoXi'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins:[
   new FileListPlugin()
  ]
}
