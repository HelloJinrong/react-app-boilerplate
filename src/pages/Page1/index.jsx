import React from 'react';
import { useHistory } from 'react-router-dom';

import { isFormData } from 'utils/isFormData';

import './index.scss';

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	const handleClick = () => {
		// eslint-disable-next-line no-console
		console.log(111);
	};

	const handleClick2 = async () => {
		// eslint-disable-next-line no-undef
		const formData = new FormData();

		formData.append('name', 'qin');
		formData.append('address', 'wuhan');

		const value = await fetch('http://localhost:3001/users/add', {
			method: 'POST',
			// headers: { 'Content-Type': 'multipart/form-data' },
			// body: formData
			body: JSON.stringify({ name: 'qin', age: 27 })
		}).then(res => res.json());

		// eslint-disable-next-line no-console
		console.log('value = ', value);
	};

	// eslint-disable-next-line no-undef
	const formData = new FormData();
	// eslint-disable-next-line no-console
	console.log(isFormData(formData));

	return (
		<div className="page1">
			this is Page1 component333!
			<div>
				<button onClick={handleToPage}>to Page2</button>
				<button onClick={handleClick}>点击</button>
				<button onClick={handleClick2}>使用 formData 传参</button>
			</div>
		</div>
	);
};

export default Page1;
