const path = require('path');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
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
		],
	},
	output: {
		filename: '[name].js',
		path: resolve('dll'),
		library: '[name]',
	},
	plugins: [
		new WebpackBar({
			name: 'build dll',
		}),
		new webpack.DllPlugin({
			name: '[name]',
			path: resolve('dll/[name]-manifest.json'),
		}),
	],
};

module.exports = config;
