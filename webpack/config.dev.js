const path = require('path');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');
const portfinder = require('portfinder');

const baseConf = require('./config');

const resolve = dir => path.resolve(__dirname, '..', dir);

const { PORT } = process.env;

if (PORT) {
	portfinder.basePort = PORT;
}

const config = merge(baseConf, {
	entry: ['./src/index.js'],
	devtool: 'eval-cheap-module-source-map',
	performance: {
		hints: false,
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		quiet: true,
		publicPath: '/',
		compress: true,
		overlay: true,
		stats: 'errors-only',
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
});

module.exports = new Promise((resolve, reject) => {
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err);
			return;
		}

		config.devServer.port = port;

		resolve(config);
	});
});
