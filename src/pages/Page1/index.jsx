import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { numState, describeUsers } from 'stores/Page1Store';

import cent_os from 'assets/os/cent_os.png';

import './index.scss';

const Page1 = () => {
	const history = useHistory();
	const [num, setNum] = useRecoilState(numState);

	const incNum = () => setNum(num + 1);

	const decNum = () => setNum(num - 1);

	const handleToPage = () => history.push('/page2');

	const users = useRecoilValue(describeUsers);

	// eslint-disable-next-line no-console
	console.log('users =', users);

	// users().then(res => {
	// 	// eslint-disable-next-line no-console
	// 	console.log('res =', res);
	// });

	return (
		<div className="page1">
			this is Page1 component!
			<p>{num}</p>
			<div>
				<button onClick={incNum}>++</button>
				<button onClick={decNum}>- -</button>

				<button onClick={handleToPage}>to Page2</button>
			</div>
			<img src={cent_os} alt="cent_os" />
		</div>
	);
};

export default Page1;
