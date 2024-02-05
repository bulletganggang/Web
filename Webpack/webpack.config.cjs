const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  // 入口，需要打包的文件
  entry: path.resolve(__dirname, './src/login/index.js'),

  // 出口，打包后的文件输出位置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js'
  },

  // 插件，给webpack提供更多功能
  plugins: [
    // 打包压缩后的html文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'Webpack.html'), //需要压缩的代码
      filename: path.resolve(__dirname, 'dist/login/index.html')  //输出路径，输出的是压缩后的html文件
    }),

    // 生成新的css文件
    new MiniCssExtractPlugin(),
  ],

  // 加载器(让webpack识别更多模块文件内容)
  // 万物皆模块, 引到入口, 才会被webpack打包
  module: {
    // rules数组中每一个元素都对应一个loader的配置，每个loader配置都包含匹配拓展名
    rules: [
      {
        // test正则表达式，匹配文件
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader']

        // 提取css代码到单独文件，优化，注意此方法不能和style.loader一起使用
        // 需要注意的是，单独使用此方法不会压缩自己写的css文件，需要配合CssMinimizerPlugin一起使用
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },

  // 优化
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // 可以实现压缩css代码文件
      `...`,
      new CssMinimizerPlugin(),
    ],
  },


};

// webpack5内置资源模块，字体图片等打包，无需额外loader
// 小于8kb导出一个data URL(base64字符串) 大于8kb发送一个单独的文件并导出URL地址

// webpack-dev-server 实时加载文件