/* eslint-disable no-console */
// import { omit } from 'lodash';
// import { Config } from 'react-native-config';
// import storage from './storage';
const baseUrl = 'http://localhost:8000';

// console.log('Config.API_URL =', Config.API_URL);

export let token = '';

export const setToken = val => {
	token = val;
};

const fetcher = (channel, method = 'GET', data = '') => {
	let response = null;
	const options = {
		headers: {}
	};

	const requestUrl = `${baseUrl}${channel}`;

	if (token) {
		Object.assign(options.headers, {
			token
		});
	}

	if (method.toUpperCase() === 'GET') {
		response = fetch(requestUrl, { ...options })
			.then(res => res.json())
			.catch(err => console.error(err));
	} else if (method.toUpperCase() === 'POST') {
		response = fetch(requestUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				...options.headers
			},
			body: data
		})
			.then(res => res.json())
			.catch(err => console.error(err));
	}

	return response;
};

export default fetcher;
// TODO
/*
1. 获取 base_url
2. token 处理

https://github.com/sunnylqm/react-native-storage

*/
