import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Home',
  data: {
    title: 'Welcome',
  },
};
export default {
  path: '/',
  component: withSuspense(data),
  exact: true,
};
