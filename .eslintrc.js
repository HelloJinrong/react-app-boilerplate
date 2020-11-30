module.exports = {
	root: true,
	plugins: ['html', 'react', 'import'],
	parser: 'babel-eslint',
	settings: {
		'import/resolver': {},
	},
	rules: {
		// import
		'import/no-unresolved': 0,
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,

		// console
		'no-console': 2,
	},
};
