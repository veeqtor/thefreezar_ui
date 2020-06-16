import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Authentication/ChangePassword',
  data: {
    title: 'Password Reset',
  },
};
export default {
  path: '/password/reset',
  component: withSuspense(data),
  exact: false,
};
