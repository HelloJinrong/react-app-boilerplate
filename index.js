// import { Config } from 'react-native-config';

// const baseUrl = Config.API_URL;

// let token = '';

// export const setToken = val => {
// 	token = val;
// };

// const fetcher = (channel, method = 'GET', data = '') => {
// 	let response = null;
// 	let options = {
// 		headers: {},
// 	};

// 	const requestUrl = `${baseUrl}${channel}`;

// 	if (token) {
// 		Object.assign(options.headers, {
// 			token,
// 		});
// 	}

// 	if (method.toUpperCase() === 'GET') {
// 		response = fetch(requestUrl, { ...options })
// 			.then(res => res.json())
// 			.catch(err => console.error(err));
// 	} else if (method.toUpperCase() === 'POST') {
// 		response = fetch(requestUrl, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json; charset=utf-8',
// 				...options.headers,
// 			},
// 			body: data,
// 		})
// 			.then(res => res.json())
// 			.catch(err => console.error(err));
// 	}

// 	return response;
// };

// export default fetcher;
