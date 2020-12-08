import { Suspense, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { Inspector } from 'react-dev-inspector';

import routes from 'routes';

const InspectorWrapper =
	process.env.NODE_ENV === 'development' ? Inspector : Fragment;

const App = () => (
	<InspectorWrapper
		keys={['control', 'shift', 'command', 'c']}
		disableLaunchEditor={false}
		onHoverElement={params => {}}
		onClickElement={params => {}}
	>
		<RecoilRoot>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
			</Suspense>
		</RecoilRoot>
	</InspectorWrapper>
);

export default hot(App);
