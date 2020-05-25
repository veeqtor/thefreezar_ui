import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

const data: IWithSuspenseProps = {
  page: 'BookingDetail',
  data: {
    title: 'Detail',
  },
};
export default {
  path: '/booking/detail',
  component: withSuspense(data),
  exact: false,
};
