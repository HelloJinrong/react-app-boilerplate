const path = require('path');
const WebpackBar = require('webpackbar');
const { merge } = require('webpack-merge');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const baseConf = require('./config');

const resolve = (dir) => path.resolve(__dirname, '..', dir);

const config = {
  entry: ['./src/index.js'],
  devtool: 'eval-cheap-module-source-map',
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3001,
    quiet: true,
    publicPath: '/',
    compress: true,
  },
  plugins: [
    new WebpackBar({
      name: 'development',
    }),
    new FaviconsWebpackPlugin(resolve('public/favicon.ico')),
  ],
};

module.exports = merge(baseConf, config);
