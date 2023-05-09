/*
 * @Author: Wanko
 * @Date: 2023-05-09 17:40:03
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-09 17:40:20
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
