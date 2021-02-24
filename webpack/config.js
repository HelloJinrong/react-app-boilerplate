const path = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');
const { ESBuildPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('../env');

const { NODE_ENV, TARGET } = process.env;

const isDev = NODE_ENV === 'development';

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
	entry: ['./src/index.js'],
	output: {
		filename: 'js/[name].js',
		path: resolve('dist')
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
			utils: resolve('src/utils'),
			locales: resolve('src/locales'),
			static: resolve('static')
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
						loader: 'esbuild-loader',
						options: {
							loader: 'jsx',
							target: 'es2015'
						}
					},
					isDev && {
						loader: 'react-dev-inspector/plugins/webpack/inspector-loader',
						options: { exclude: '' }
					}
				].filter(Boolean)
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					{
						loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
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
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							publicPath:
								TARGET === 'github' ? '/react-app-boilerplate/fonts' : '/fonts'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ESBuildPlugin(),
		new HtmlWebpackPlugin({
			title: 'react-app-boilerplate',
			template: resolve('public/index.html'),
			inject: true
		}),
		!isDev &&
			new MiniCssExtractPlugin({
				path: resolve('dist'),
				publicPath: TARGET === 'github' ? '/react-app-boilerplate' : '/',
				filename: 'css/[name].[hash].css',
				chunkFilename: 'css/[id].[hash].css',
				ignoreOrder: true
			}),
		new ProvidePlugin({
			T: require.resolve('i18next')
		}),
		new DefinePlugin({
			'process.env.PWD': JSON.stringify(process.cwd()),
			BASE_URL: JSON.stringify(env[NODE_ENV].base_url)
		})
	].filter(Boolean)
};

module.exports = config;
