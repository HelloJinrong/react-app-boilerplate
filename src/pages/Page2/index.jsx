import { useHistory } from 'react-router-dom';

const Page2 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page1');

	return (
		<div className="page2">
			this is Page2 component232232323232232324! --
			<button onClick={handleToPage}>to Page1</button>
		</div>
	);
};

export default Page2;
