import { Suspense, ErrorBoundary } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';

import routes from 'routes';

const App = () => (
	<RecoilRoot>
		{/* <<ErrorBoundary> */}
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
		</Suspense>
		{/* </ErrorBoundary> */}
	</RecoilRoot>
);

export default hot(App);
