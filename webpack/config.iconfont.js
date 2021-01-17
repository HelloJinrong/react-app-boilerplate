const path = require('path');
const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');

const resolve = dir => path.join(__dirname, '..', dir);

const options = {
	fontName: 'iconfont',
	cssPrefix: 'if',
	svgs: resolve('static/icons/**/*.svg'),
	fontsOutput: resolve('static/fonts/'),
	cssOutput: resolve('static/fonts/iconfont.css'),
	htmlOutput: resolve('static/fonts/_font-preview.html')
	// jsOutput: path.join(dir, 'fonts/fonts.js')
	// formats: ['ttf', 'woff', 'svg'],
};

new WebpackIconfontPluginNodejs(options).build();
