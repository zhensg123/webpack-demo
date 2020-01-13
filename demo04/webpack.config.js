module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};
