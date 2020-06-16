import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Authentication',
  data: {
    title: 'Authentication',
  },
};
export default {
  path: '/auth',
  component: withSuspense(data),
  exact: true,
};
