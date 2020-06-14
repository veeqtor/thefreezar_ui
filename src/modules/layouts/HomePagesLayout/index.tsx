import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import SEO from 'modules/components/SEO';

export interface IBasketPage {
  title: string;
  children: React.ReactNode;
}

const HomePagesLayout = (props: IBasketPage): React.ReactElement => {
  const { children, title } = props;
  return (
    <>
      <SEO title={title} />
      <HomePagesLayout.Layout>
        <span>{title}</span>
        {children}
      </HomePagesLayout.Layout>
    </>
  );
};

HomePagesLayout.Layout = styled.section`
  padding: 6.25em 2em;
  color: ${colors.WHITE};
  margin: 0 auto;
  max-width: 1440px;

  span {
    color: ${colors.DARKER_GRAY};
    font-size: 2em;
    font-family: Futura;
    text-transform: uppercase;
  }
`;

export default HomePagesLayout;
