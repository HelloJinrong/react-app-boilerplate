const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('../env');

const { NODE_ENV, ENV_CONFIG } = process.env;

const isDev = NODE_ENV === 'development';

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
	mode: NODE_ENV,
	output: {
		filename: 'js/[name].js',
		path: resolve('dist')
		// publicPath: '/'
	},
	resolve: {
		alias: {
			pages: resolve('src/pages'),
			stores: resolve('src/stores'),
			routes: resolve('src/routes'),
			layout: resolve('src/layout'),
			components: resolve('src/components'),
			styles: resolve('src/styles'),
			assets: resolve('src/assets'),
			utils: resolve('src/utils')
			// 'react-dom': '@hot-loader/react-dom'
		},
		extensions: ['.jsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				include: resolve('src'),
				use: [
					{
						loader: 'thread-loader',
						options: {
							workers: require('os').cpus()
						}
					},
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: true
						}
					},
					{
						loader: 'react-dev-inspector/plugins/webpack/inspector-loader',
						options: { exclude: '' }
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'thread-loader',
						options: {
							workers: require('os').cpus()
						}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react-app-boilerplate',
			path: resolve('public/index.html')
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[hash].css'
		}),
		new DefinePlugin({
			'process.env.PWD': JSON.stringify(process.cwd()),
			BASE_URL: JSON.stringify(env[ENV_CONFIG].base_url)
		})
	]
};

module.exports = config;
