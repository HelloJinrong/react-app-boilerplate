import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';

const MainLayout = ({ route }) => {
	const { routes } = route;

	return (
		<div className="main-layout">
			this is MainLayout component!
			{renderRoutes(routes)}
		</div>
	);
};

MainLayout.propTypes = {
	route: PropTypes.object.isRequired
};

export default withRouter(MainLayout);
