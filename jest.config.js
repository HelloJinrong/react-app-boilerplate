module.exports = {
	verbose: true,
	moduleFileExtensions: ['js', 'jsx'],
	testTimeout: 10 * 1000,
	testPathIgnorePatterns: ['node_modules', 'dll', 'dist', 'public', 'env'],
	testMatch: ['**/tests/**/*.(spec|test).(js|jsx|ts|tsx)'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10
		}
	}
};
