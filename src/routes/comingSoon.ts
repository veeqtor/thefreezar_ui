import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'ComingSoon',
  data: {
    title: 'Coming Soon',
  },
};

export default {
  component: withSuspense(data),
  path: '/coming-soon',
  exact: true,
};
