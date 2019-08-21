import { lazy } from 'react';

const Home = lazy(() => import('~/pages/Home'));
const Calendar = lazy(() => import('~/pages/Calendar'));

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/calendar', exact: true, name: 'Calendar', component: Calendar },
];

export default routes;
