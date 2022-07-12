const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    pageOne: './src/modules/shops_page/shops_page.js',
    pageTwo: './src/modules/shopping_cart_page/shopping_cart_page.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
    },
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/img/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HTMLPlugin({
      filename: 'shops_page.html',
      template: './src/modules/shops_page/shops_page.html',
      chunks: ['pageOne'],
      inject: "body"
    }),
    new HTMLPlugin({
      filename: 'shopping_cart_page.html',
      template: './src/modules/shopping_cart_page/shopping_cart_page.html',
      chunks: ['pageTwo'],
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
