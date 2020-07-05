import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Session',
  data: {
    title: 'Session',
  },
};
export default {
  path: '/session',
  component: withSuspense(data),
  exact: true,
};
