var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path')
module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'build.js'
  },
  plugins: [
    new HtmlwebpackPlugin({ // 打包输出HTML
      title: 'Hello World app',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
