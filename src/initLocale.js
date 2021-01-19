import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import resources from 'locales';

const getCurrentSystemLang = () => {
	if (navigator.language === 'zh') {
		return 'zh_CN';
	}

	return navigator.language;
};

T.use(initReactI18next).init({
	resources,
	lng: Cookies.get('lang') || getCurrentSystemLang(),
	keySeparator: false,
	interpolation: {
		escapeValue: false
	}
});

export default T;
