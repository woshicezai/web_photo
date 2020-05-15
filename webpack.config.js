const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: './src/index', // string | object | array  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: 'bundle.js', // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    publicPath: '', // string    // 输出解析文件的目录，url 相对于 HTML 页面
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: '家庭相册',
    template: './src/template/h5.html',
    'meta': {
      'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
      'theme-color': '#4285f4'
    }
  })]
}