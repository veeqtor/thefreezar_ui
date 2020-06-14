import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import HomePagesLayout from 'modules/layouts/HomePagesLayout';

export interface IBasketPage {
  title: string;
}

const BasketPage = (props: IBasketPage): React.ReactElement => {
  const { title } = props;
  return (
    <HomePagesLayout title={title}>
      <h4>My table of selected sessions</h4>
    </HomePagesLayout>
  );
};

BasketPage.Layout = styled.section`
  padding: 6.25em 2em;
  color: ${colors.WHITE};
  margin: 0 auto;
  max-width: 1440px;
`;

export default BasketPage;
