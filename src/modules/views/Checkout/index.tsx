import * as React from 'react';
import styled from '@emotion/styled';
import HomePagesLayout from 'modules/layouts/HomePagesLayout';

export interface IBasketPage {
  title: string;
}

const Checkout = (props: IBasketPage): React.ReactElement => {
  const { title } = props;
  return (
    <HomePagesLayout title={title}>
      <p>Sessions to Checkout</p>
    </HomePagesLayout>
  );
};

Checkout.Wrapper = styled.div``;

export default Checkout;
