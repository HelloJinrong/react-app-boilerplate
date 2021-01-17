import './index.scss';

const Locales = () => {
	const handleSwitchLang = event => {
		// eslint-disable-next-line no-console
		console.log(event.target.dataset.lang);
	};

	return (
		<div className="locales">
			<span data-lang="zh_CN" onClick={handleSwitchLang}>
				简体中文
			</span>
			&nbsp; · &nbsp;
			<span data-lang="en" onClick={handleSwitchLang}>
				English
			</span>
		</div>
	);
};

export default Locales;
