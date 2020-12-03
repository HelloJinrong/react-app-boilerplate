import { useHistory } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url, method, data, ...restArgs) => {
	// eslint-disable-next-line no-console
	console.log(url, method, data, JSON.parse(data), restArgs);

	return axios.post(url, {
		...JSON.parse(data),
	});
};

const Page2 = () => {
	const history = useHistory();

	const { data, error } = useSWR(
		[
			'/api/users/add',
			'get',
			JSON.stringify({
				name: 'yu',
				age: 28,
			}),
		],
		fetcher
	);

	// eslint-disable-next-line no-console
	console.log('data =', data);

	const handleToPage = () => history.push('/page1');

	return (
		<div className="page2">
			this is Page2 component3434!
			<button onClick={handleToPage}>to Page1</button>
		</div>
	);
};

export default Page2;

/* 
	1.再封装一个 fetcher 方法
	2. 
*/
