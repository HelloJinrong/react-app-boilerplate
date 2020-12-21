import MainLayout from 'layout/MainLayout';

import { load, redirect } from './utils';

const routes = [
	{
		component: MainLayout,
		routes: [
			{
				path: '/',
				exact: true,
				component: redirect('page1')
			},
			{
				path: '/page1',
				exact: true,
				component: load('Page1')
			},
			{
				path: '/page2',
				exact: true,
				component: load('Page2')
			}
		]
	}
];

export default routes;
