import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'SessionDetail',
  data: {
    title: 'Session detail',
  },
};
export default {
  path: '/session/:sessionId/',
  component: withSuspense(data),
  exact: true,
};
