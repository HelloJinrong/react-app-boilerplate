import { useTranslation } from 'react-i18next';

const Welcome = () => {
	const { t } = useTranslation();

	return <div>{t('WELCOME')}</div>;
};

export default Welcome;
