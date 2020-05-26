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
      path: `${path}/not-found`,
      component: withSuspense({
        page: 'Dashboard/NotFound',
        data: {
          title: 'Dashboard - NotFound',
        },
      }),
      exact: true,
    },
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
  ];
};

export { getDashBoardRoutes };
