module.exports = {
	root: true,
	extends: ['standard', 'plugin:react/recommended'],
	plugins: ['html', 'react', 'import'],
	parser: '@babel/eslint-parser',
	settings: {
		'import/resolver': {},
		react: {
			pragma: 'React', // Pragma to use, default to "React"
			fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			flowVersion: '0.53' // Flow version
		}
	},
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	rules: {
		// react
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		// import
		'import/no-unresolved': 0,
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,

		// console
		'no-console': 2,
		'no-tabs': 0,
		indent: 0,
		'comma-dangle': ['error', 'never'],
		semi: ['error', 'always'],

		'react/react-in-jsx-scope': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }] // should add ".ts" if typescript project
	},
	globals: {
		fetch: true
	}
};
