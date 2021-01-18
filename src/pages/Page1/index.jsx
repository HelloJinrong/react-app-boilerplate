import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Page1 = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			<p>{t('welcome', { x: 888 })}</p>
			<div>
				<button onClick={handleToPage}>to Page2</button>
			</div>
			<i className="if if-hat"></i>
		</div>
	);
};

export default Page1;
