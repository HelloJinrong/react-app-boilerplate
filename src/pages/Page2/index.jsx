import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

const set = new Set();

const Page2 = () => {
	const history = useHistory();
	const [count, setCount] = useState(0);
	const handleToPage = () => history.push('/page1');
	const handleAddCount = () => setCount(count + 1);
	const handleRemoveCount = () => setCount(count - 1);

	const obj = useMemo(
		() => ({
			name: 'qin',
			age: 26
		}),
		[]
	);

	useEffect(() => {
		set.add(obj);
		// eslint-disable-next-line no-console
		console.log(set.size);
	});

	return (
		<div className="page2">
			this is Page2 component ---- {count}! --- {set.size}
			<p>
				{obj.name} ---- {obj.age}
			</p>
			<button onClick={handleToPage}>to Page1</button>
			<button onClick={handleAddCount}>++</button>
			<button onClick={handleRemoveCount}>--</button>
		</div>
	);
};

export default Page2;

/*
	1.再封装一个 fetcher 方法
	2.
*/
