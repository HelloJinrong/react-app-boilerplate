import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const set = new Set();

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	const handleClick = () => {
		// eslint-disable-next-line no-console
		console.log(111);
	};

	const handleClick2 = () => {
		// eslint-disable-next-line no-console
		console.log(222);
	};

	useEffect(() => {
		set.add(handleClick2);
		// eslint-disable-next-line no-console
		console.log('length =', set.size);
	}, []);

	return (
		<div className="page1">
			this is Page1 component333!
			<div>
				<button onClick={handleToPage}>to Page2</button>
				<button onClick={handleClick}>点击</button>
				<button onClick={handleClick2}>点击2</button>
			</div>
		</div>
	);
};

export default Page1;
