const path = require('path');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
	devtool: 'eval-cheap-module-source-map',
	entry: {
		vendor: [
			'@loadable/component',
			'prop-types',
			'react',
			'react-dom',
			'react-router-config',
			'react-router-dom',
			'recoil',
			'lodash',
			'axios',
			'koa',
			'koa-router',
			'dayjs'
		]
	},
	output: {
		filename: '[name].js',
		path: resolve('dll'),
		library: '[name]'
	},
	plugins: [
		new WebpackBar({
			name: 'build dll'
		}),
		new webpack.DllPlugin({
			name: '[name]',
			path: resolve('dll/[name]-manifest.json')
		})
	]
};

module.exports = config;
