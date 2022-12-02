/*
 * @Author: Wanko
 * @Date: 2022-12-02 13:53:35
 * @LastEditors: Wanko
 * @LastEditTime: 2022-12-02 14:38:23
 * @Description:
 */
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const commonCssLoader = [MiniCssExtractPlugin.loader, 'css-loader']
module.exports = {
  mode: 'production',
  entry: resolve(__dirname, './index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: commonCssLoader
      },
      {
        test: /\.scss$/,
        use: [...commonCssLoader, 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
}
