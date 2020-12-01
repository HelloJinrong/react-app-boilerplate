import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const MainLayout = ({ route }) => {
	const { routes } = route;

	return (
		<div className="main-layout">
			this is MainLayout component!
			{renderRoutes(routes)}
		</div>
	);
};

MainLayout.propsTypes = {
	route: PropTypes.object.isRequired,
};

export default withRouter(MainLayout);
