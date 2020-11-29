import { Redirect } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';

import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';

const routes = [
  {
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="/page1" />
      },
      {
        path: '/page1',
        exact: true,
        component: Page1
      },
      {
        path: '/page2',
        exact: true,
        component: Page2
      }
    ]
  }
];

export default routes;
