const path = require('path');
const svgtofont = require('svgtofont');

const pkg = require('../package.json');

const resolve = dir => path.join(__dirname, '..', dir);

svgtofont({
	src: resolve('static/icons'),
	dist: resolve('static/fonts'),
	fontName: 'if',
	css: true,
	website: {
		title: 'if',
		logo: '',
		version: pkg.version
	}
});
