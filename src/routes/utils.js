import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';

export const load = path => loadable(() => import(`../pages/${path}`));

// eslint-disable-next-line react/display-name
export const redirect = path => () => <Redirect to={path} />;
