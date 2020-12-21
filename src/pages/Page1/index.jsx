import './index.scss';

import axios from 'axios';
import QRCode from 'qrcode.react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	const handleClick = () => {
		// eslint-disable-next-line no-console
		console.log(111);
	};

	const handleClick2 = async () => {
		const formData = new FormData();

		formData.append('name', 'qin');
		formData.append('address', 'wuhan');

		const value = await axios({
			url: 'http://localhost:3001/users/add',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'name=qin&age=27'
		});

		// eslint-disable-next-line no-console
		console.log('value = ', value);
	};

	return (
		<div className="page1">
			this is Page1 component333!
			<div>
				<button onClick={handleToPage}>to Page2</button>
				<button onClick={handleClick}>点击</button>
				<button onClick={handleClick2}>使用 formData 传参</button>
				<QRCode
					value="https://www.baidu.com/"
					imageSettings={{
						src: 'https://static.zpao.com/favicon.png',
						x: null,
						y: null,
						height: 44,
						width: 44,
						excavate: true
					}}
				/>
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
