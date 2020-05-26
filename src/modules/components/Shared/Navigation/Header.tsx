import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import BrandName from 'assets/img/brand-light.png';
import { mq } from 'styles/_global.style';
import { colors } from 'styles/_variables.style';

interface IHeaderProps {
  children: React.ReactNode;
  location: string;
  isDashboard: boolean;
  navState: boolean;
  elmRef: React.MutableRefObject<HTMLElement>;
  headerBg: boolean;
  toggleHamburgerIcon: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
interface IHeaderNavProp {
  isOpen: boolean;
  headerBg: boolean;
  isDashboard: boolean;
}
interface IHeaderHambugerIconProp {
  isOpen: boolean;
  isDashboard: boolean;
}

const Header = (props: IHeaderProps): React.ReactElement => {
  const { isDashboard, navState, elmRef, headerBg, toggleHamburgerIcon, children } = props;

  return (
    <Header.Wrapper isOpen={navState} ref={elmRef} headerBg={headerBg} isDashboard={isDashboard}>
      <Link to="/">
        <Header.BrandName src={BrandName} alt="The Freezar" />
      </Link>
      <Header.HambugerIcon isOpen={navState} onClick={toggleHamburgerIcon} isDashboard={isDashboard}>
        <span />
        <span />
        <span />
      </Header.HambugerIcon>
      <Header.Nav isOpen={navState} headerBg={headerBg} isDashboard={isDashboard}>
        {children}
      </Header.Nav>
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header<IHeaderNavProp>`
  height: ${({ headerBg, isDashboard }): string => (headerBg || isDashboard ? '4em' : '6.25em')};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 600ms ease-in-out;
  background: ${({ headerBg, isOpen }): string => {
    if (isOpen || headerBg) {
      return `${colors.DARKER_GRAY};`;
    }
    return 'transparent;';
  }};
`;

Header.Nav = styled.nav<IHeaderNavProp>`
  ${({ isDashboard, isOpen, headerBg }): string | false =>
    !isDashboard &&
    `width: 100%;
    text-align: center;
    background: ${colors.DARKER_GRAY};
    position: absolute;
    left: 0;
    box-shadow: 0 1px 3px 0 rgba(46, 46, 46, 0.45), 0 1px 2px 0 rgba(255, 255, 255, 0.1);
    transition: all 500ms ease-in-out;
    top: ${isOpen ? (headerBg || isDashboard ? '4em' : '6.25em') : '-200em'};

    ${mq[2]} {
      width: unset;
      text-align: unset;
      background: unset;
      position: unset;
      left: unset;
      box-shadow: unset;
  }`}
`;

Header.HambugerIcon = styled.div<IHeaderHambugerIconProp>`
  cursor: pointer;
  display: ${({ isDashboard }): string => (isDashboard ? 'none' : 'block')};
  span {
    background-color: ${colors.WHITE};
    display: block;
    height: 0.1875rem;
    margin: 0.3125rem;
    width: 1.563rem;
    transition: all 500ms ease-in-out;
  }
  ${mq[2]} {
    display: none;
  }

  ${({ isOpen }): string => {
    return isOpen
      ? `span:first-of-type {
        transform: rotate(-45deg) translate(-0.3125rem, 0.375rem);
      };
      span:nth-of-type(2) {
        opacity: 0;
      };
      span:last-of-type {
        transform: rotate(45deg) translate(-0.3125rem, -0.375rem);
      };`
      : '';
  }}
`;

Header.BrandName = styled.img`
  width: auto;
  height: 5.313em;
`;

export default Header;
