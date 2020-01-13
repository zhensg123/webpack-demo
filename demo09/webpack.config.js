var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse('true'))
});

module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
  plugins: [devFlagPlugin]
};
