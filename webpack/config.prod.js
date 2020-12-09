const Webpackbar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConf = require('./config');

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
		new CleanWebpackPlugin()
	]
};

module.exports = merge(baseConf, config);
