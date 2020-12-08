export let token = 'this is token';

export const setToken = val => {
	token = val;
};

const request = () => {
	return {
		token,
	};
};

export default request;
