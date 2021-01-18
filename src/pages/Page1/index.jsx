import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			<div>
				<button onClick={handleToPage}>to Page2</button>
			</div>
			<i className="if if-hat"></i>
		</div>
	);
};

export default Page1;
