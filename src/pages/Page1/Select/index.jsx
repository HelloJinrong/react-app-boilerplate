import useSelect from '@rooks/use-select';

const list = [
	{
		heading: 'Tab 1',
		content: 'Tab 1 Content'
	},
	{
		heading: 'Tab 2',
		content: 'Tab 2 Content'
	}
];

const MySelect = () => {
	const { index, setIndex, item } = useSelect(list, 0);

	return (
		<div>
			{list.map((listItem, listItemIndex) => (
				<button
					key={listItemIndex}
					style={{
						background: index === listItemIndex ? 'dodgerblue' : 'inherit'
					}}
					onClick={() => setIndex(listItemIndex)}
				>
					{listItem.heading}
				</button>
			))}
			<p>{item.content}</p>
		</div>
	);
};

export default MySelect;
