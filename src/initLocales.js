import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Cookies from 'js-cookie';
import resources from 'locales';

const getCurrentSystemLang = () => {
	return navigator.language === 'zh' ? 'zh_CN' : 'en';
};

i18n.use(initReactI18next).init({
	resources,
	lng: Cookies.get('lang') || getCurrentSystemLang(),
	keySeparator: false,
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
