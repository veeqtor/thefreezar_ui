import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'Booking',
  data: {
    title: 'Booking',
  },
};
export default {
  path: '/booking',
  component: withSuspense(data),
  exact: true,
};
