import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { numState } from 'stores/Page1Store';

import './index.scss';

const Page1 = () => {
	const history = useHistory();
	const [num, setNum] = useRecoilState(numState);

	const incNum = () => setNum(num + 1);

	const decNum = () => setNum(num - 1);

	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			this is Page1 component!
			<p>{num}</p>
			<div>
				<button onClick={incNum}>++</button>
				<button onClick={decNum}>- -</button>

				<button onClick={handleToPage}>to Page2</button>
			</div>
		</div>
	);
};

export default Page1;
