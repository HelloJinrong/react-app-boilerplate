import { useCallback, useState } from 'react';

const useInputValue = initial => {
	const [value, setValue] = useState(initial);

	const onChange = useCallback(e => {
		const val = e.target.value;

		setValue(val);
	}, []);

	return [value, onChange];
};

export default useInputValue;
