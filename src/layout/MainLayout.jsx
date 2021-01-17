import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import logo from 'assets/logo.svg';
import PropTypes from 'prop-types';

import Locales from './Locales';

import './index.scss';

const MainLayout = ({ route }) => {
	const { routes } = route;

	return (
		<div className="main-layout">
			<img src={logo} alt="logo"></img>
			<Locales />
			{renderRoutes(routes)}
		</div>
	);
};

MainLayout.propTypes = {
	route: PropTypes.object.isRequired
};

export default withRouter(MainLayout);
