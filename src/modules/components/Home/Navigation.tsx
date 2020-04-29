import * as React from 'react';
import styled from '@emotion/styled';

import NavLinks from 'modules/components/Home/NavLinks';
import Header from 'modules/components/Home/Header';
import { colors } from 'styles/_variables.style';

interface INavigationProps {
  currentLocation: string;
}
const Navigation = ({ currentLocation }: INavigationProps): React.ReactElement => {
  return (
    <Navigation.Wrapper>
      <Header>
        <NavLinks location={currentLocation} />
      </Header>
    </Navigation.Wrapper>
  );
};

Navigation.Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  color: ${colors.WHITE};
`;

export default Navigation;
