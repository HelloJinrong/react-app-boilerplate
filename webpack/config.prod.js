const path = require('path');
const Webpackbar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConf = require('./config');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
	devtool: false,
	performance: {
		hints: false
	},
	optimization: {
		usedExports: true,
		minimize: true,
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new Webpackbar({
			name: 'production'
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [{ from: resolve('public/favicon.ico'), to: resolve('dist') }]
		})
	]
};

module.exports = merge(baseConf, config);
