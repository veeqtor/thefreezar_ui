import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Basket',
  data: {
    title: 'My Basket',
  },
};

export default {
  path: '/basket',
  component: withSuspense(data),
  exact: true,
};
