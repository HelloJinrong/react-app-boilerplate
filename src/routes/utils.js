import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

export const load = path => loadable(() => import(`../pages/${path}`));

export const redirect = path => () => <Redirect to={path} />;
