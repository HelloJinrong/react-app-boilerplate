export const isFormData = obj => {
	return {}.toString.call(obj) === '[object FormData]';
};
