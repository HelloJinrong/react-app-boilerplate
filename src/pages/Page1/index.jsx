import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { numState, describeUsers, lengthData } from 'stores/Page1Store';

import cent_os from 'assets/os/cent_os.png';

import './index.scss';

const Page1 = () => {
	const history = useHistory();
	const [{ url }, setNum] = useRecoilState(numState);

	const handleToPage = () => history.push('/page2');

	const [users, setUser] = useRecoilState(describeUsers());

	// eslint-disable-next-line no-console
	console.log('users =', users);

	const handleSetUser = () => {
		setUser({ url: '/api/users' });
	};

	const len = useRecoilValue(lengthData);

	return (
		<div className="page1">
			this is Page1 component!
			<p>
				{url} ----- {len}
			</p>
			<div>
				<button onClick={handleToPage}>to Page2</button>

				<button onClick={handleSetUser}>点击</button>
			</div>
			<img src={cent_os} alt="cent_os" />
		</div>
	);
};

export default Page1;
