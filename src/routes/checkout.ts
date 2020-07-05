import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Checkout',
  data: {
    title: 'Checkout',
  },
};

export default {
  path: '/checkout',
  component: withSuspense(data),
  exact: true,
};
