import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';
import { RouteProps } from 'react-router-dom';

const data: IWithSuspenseProps = {
  page: 'Dashboard',
  data: {
    title: 'Dashboard',
  },
};
export default {
  path: '/dashboard',
  component: withSuspense(data),
  exact: false,
};

const getDashBoardRoutes = (path: string): RouteProps[] => {
  return [
    {
      path: `${path}/overview`,
      component: withSuspense({
        page: 'Dashboard/Overview',
        data: {
          title: 'Dashboard - Overview',
        },
      }),
      exact: true,
    },
    {
      path: `${path}/profile`,
      component: withSuspense({
        page: 'Dashboard/Profile',
        data: {
          title: 'Dashboard - Profile',
        },
      }),
      exact: true,
    },
    {
      path: `${path}/sessions`,
      component: withSuspense({
        page: 'Dashboard/Sessions',
        data: {
          title: 'Dashboard - Sessions',
        },
      }),
      exact: true,
    },
    {
      path: `${path}/settings`,
      component: withSuspense({
        page: 'Dashboard/Settings',
        data: {
          title: 'Dashboard - Settings',
        },
      }),
      exact: true,
    },
  ];
};

export { getDashBoardRoutes };
