import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';

import routes from 'routes';

const App = () => (
	<RecoilRoot>
		<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
	</RecoilRoot>
);

export default hot(App);
