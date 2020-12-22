import { useHistory } from 'react-router-dom';

import useInputValue from 'components/useInputValue';

const Page2 = () => {
	const history = useHistory();
	const [value, onChange] = useInputValue('qin');
	const handleToPage = () => history.push('/page1');

	const handleGetValue = () => {
		// eslint-disable-next-line no-console
		console.log('value =', value);
	};

	return (
		<div className="page2">
			this is Page2 component3434!
			<input value={value} onChange={onChange}></input>
			<button onClick={handleToPage}>to Page1</button>
			<button onClick={handleGetValue}>获取输入框的值</button>
		</div>
	);
};

export default Page2;

/*
	1.再封装一个 fetcher 方法
	2.
*/
