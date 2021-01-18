import { Fragment, Suspense } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Inspector } from 'react-dev-inspector';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from 'routes';

const InspectorWrapper =
	process.env.NODE_ENV === 'development' ? Inspector : Fragment;

const App = () => {
	return (
		<InspectorWrapper
			keys={['control', 'shift', 'command', 'c']}
			disableLaunchEditor={false}
			onHoverElement={params => {}}
			onClickElement={params => {}}
		>
			<CookiesProvider>
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
					</Suspense>
				</RecoilRoot>
			</CookiesProvider>
		</InspectorWrapper>
	);
};

export default hot(App);
