// import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Locales from './Locales';
import Welcome from './Welcome';

import './index.scss';

const MainLayout = ({ route }) => {
	// const { routes } = route;

	return (
		<div className="main-layout">
			<i className="if if-logo" />
			<Locales />
			<Welcome />
			{/* {renderRoutes(routes)} */}
		</div>
	);
};

MainLayout.propTypes = {
	route: PropTypes.object.isRequired
};

export default withRouter(MainLayout);
