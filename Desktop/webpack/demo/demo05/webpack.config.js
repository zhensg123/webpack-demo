module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false

            }
          }
        ]
      }
    ]
  }
};
