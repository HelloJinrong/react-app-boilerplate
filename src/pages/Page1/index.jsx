import { useHistory } from 'react-router-dom';
import { getCurrentTime } from 'utils/datetime';

import './index.scss';

import dayjs from 'dayjs';
// eslint-disable-next-line no-console
console.log('time =', dayjs('2003-1-4').format('MM-DD-YYYY'));

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			this is Page1 component!
			<div>
				<button onClick={handleToPage}>to Page2</button>
				<button>点击</button>
			</div>
		</div>
	);
};

export default Page1;
