import request from 'utils/request';

const Welcome = () => {
	const handleRequest = async () => {
		await request({
			channel: '/users'
		});
	};
	return <div onClick={handleRequest}>{T.t('WELCOME')}</div>;
};

export default Welcome;
