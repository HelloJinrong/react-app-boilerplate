import { format } from '../src/utils/format';

describe('test format feature', () => {
	test('`format` function', () => {
		expect(format('a')).toBe('a');
	});
});
