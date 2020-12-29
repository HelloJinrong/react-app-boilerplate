import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Page2 = () => {
	const history = useHistory();
	const [count, setCount] = useState(0);
	const handleToPage = () => history.push('/page1');
	const handleAddCount = () => setCount(count + 1);
	const handleRemoveCount = () => setCount(count - 1);

	return (
		<div className="page2">
			this is Page2 component
			<button onClick={handleToPage}>to Page1</button>
			<button onClick={handleAddCount}>++</button>
			<button onClick={handleRemoveCount}>--</button>
		</div>
	);
};

export default Page2;
