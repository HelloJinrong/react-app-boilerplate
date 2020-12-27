import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			this is Page1 component333!
			<div>
				<button onClick={handleToPage}>to Page2</button>
			</div>
		</div>
	);
};

export default Page1;

/*

	application/x-www-form-urlencoded => key1=value1&value2=value2
	application/json => isJsonString
	multipart/form-data => isFormData

*/
