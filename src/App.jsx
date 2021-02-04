import { Fragment, StrictMode, Suspense } from 'react';
import { Inspector } from 'react-dev-inspector';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
			<StrictMode>
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<BrowserRouter>
							{renderRoutes(routes)}
							<ToastContainer />
						</BrowserRouter>
					</Suspense>
				</RecoilRoot>
			</StrictMode>
		</InspectorWrapper>
	);
};

export default hot(App);
