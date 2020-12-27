/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';

import useImageSize from 'components/useImageSize';
import useInputValue from 'components/useInputValue';

const Page2 = () => {
	const imageUrl = 'https://pic.feizl.com/upload/allimg/170614/235253EG-2.jpg';
	const history = useHistory();
	const [value, onChange] = useInputValue('qin');

	const url = 'https://cdn.int64ago.org/ogk39i54.png';

	const [width, height] = useImageSize(imageUrl);

	console.log('w, h =', width, height);
	const handleToPage = () => history.push('/page1');

	const handleGetValue = () => {
		// eslint-disable-next-line no-console
		console.log('value =', value);

		// setFirstName('qin');
	};

	const handleRemoveCookie = () => {
		// removeFirstName('name');
	};

	return (
		<div className="page2">
			this is Page2 component3434!
			<input value={value} onChange={onChange}></input>
			<button onClick={handleToPage}>to Page1</button>
			<button onClick={handleGetValue}>获取输入框的值</button>
			<button onClick={handleRemoveCookie}>移除cookie</button>
		</div>
	);
};

export default Page2;

/*
	1.再封装一个 fetcher 方法
	2.
*/
