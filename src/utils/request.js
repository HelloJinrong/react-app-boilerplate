import { toast } from 'react-toastify';
import axios from 'axios';
import { get, isNaN } from 'lodash';

const TIMEOUT_DURATION = 10 * 1000;

const showMessage = message => {
	if (message) {
		toast.error(message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	}
};

const formatError = error => JSON.stringify(error);

const instance = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: TIMEOUT_DURATION,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
});

// TODO:Authorization token
// instance.defaults.headers.common.Authorization = Bearer AUTH_TOKEN;

instance.interceptors.response.use(
	function (response) {
		const code = get(response, 'status');
		const data = get(response, 'data', {});

		const status = parseInt(code, 10);

		if (!isNaN(status) && status === 200) {
			return Promise.resolve(data);
		}

		return Promise.resolve(response);
	},

	function (error) {
		if (formatError(error).includes('404')) {
			showMessage('Request failed');
		} else if (formatError(error).includes('timeout')) {
			showMessage('network timeout');
		}

		return Promise.reject(error);
	}
);

const request = ({ channel, method = 'GET', ...restArgs }) => {
	return instance({
		url: channel,
		method,
		...restArgs
	});
};

export default request;
