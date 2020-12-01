const path = require('path');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConf = require('./config');

const resolve = dir => path.resolve(__dirname, '..', dir);

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
		overlay: true,
	},
	plugins: [
		new WebpackBar({
			name: 'development',
		}),
		new FaviconsWebpackPlugin(resolve('public/favicon.ico')),
		new ESLintPlugin({
			extensions: ['.js', '.jsx'],
		}),
	],
};

module.exports = merge(baseConf, config);
