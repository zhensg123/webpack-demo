const path = require('path');

module.exports = {
  mode:'development',
  entry: {
  	index1:'./index1.js',
  	index2:'./index2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};