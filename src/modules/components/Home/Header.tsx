import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import BrandName from 'assets/img/brand-light.png';
import Icon from 'modules/components/Icon';
import { mq } from 'styles/_global.style';

// const links =
interface IHeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: IHeaderProps): React.ReactElement => {
  const handleClick = (): void => {
    console.log('Clicked');
  };
  return (
    <Header.Wrapper>
      <Link to="/">
        <Header.BrandName src={BrandName} alt="The Freezar" />
      </Link>
      <Header.Nav>
        <Header.HambugerIcon>
          <Icon iconType="ios-menu" iconSize="xlg" handleClick={handleClick} />
        </Header.HambugerIcon>
        {children}
      </Header.Nav>
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header`
  height: 6.25em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.Nav = styled.nav``;

Header.HambugerIcon = styled.div`
  ${mq[2]} {
    display: none;
  }
`;

Header.BrandName = styled.img`
  width: auto;
  height: 5.313em;
`;

export default Header;
