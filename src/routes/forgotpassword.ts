import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Authentication/ForgotPassword',
  data: {
    title: 'Password Reset',
  },
};
export default {
  path: '/forgotpassword',
  component: withSuspense(data),
  exact: true,
};
