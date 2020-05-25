import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import BrandName from 'assets/img/brand-light.png';
import { mq } from 'styles/_global.style';
import { colors } from 'styles/_variables.style';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface IHeaderProps {
  children: React.ReactNode;
}
interface IHeaderWrapperProp {
  isOpen: boolean;
  headerBg: boolean;
}
interface IHeaderNavProp {
  isOpen: boolean;
  headerBg: boolean;
}
interface IHeaderHambugerIconProp {
  isOpen: boolean;
}

const Header = ({ children }: IHeaderProps): React.ReactElement => {
  const ref = React.useRef({}) as React.MutableRefObject<HTMLElement>;
  const [navState, setNavState] = React.useState(false);
  const [headerBg, setHeaderBg] = React.useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -100 && !headerBg) {
      setHeaderBg(!headerBg);
    } else if (currPos.y > -100 && headerBg) {
      setHeaderBg(false);
    }
  });

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        navState && setNavState(!navState);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navState]);

  return (
    <Header.Wrapper isOpen={navState} ref={ref} headerBg={headerBg}>
      <Link to="/">
        <Header.BrandName src={BrandName} alt="The Freezar" />
      </Link>
      <Header.HambugerIcon isOpen={navState} onClick={(): void => setNavState(!navState)}>
        <span />
        <span />
        <span />
      </Header.HambugerIcon>
      <Header.Nav isOpen={navState} headerBg={headerBg}>
        {children}
      </Header.Nav>
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header<IHeaderWrapperProp>`
  height: ${({ headerBg }): string => (headerBg ? '4em' : '6.25em')};
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
  width: 100%;
  text-align: center;
  background: ${colors.DARKER_GRAY};
  position: absolute;
  left: 0;
  box-shadow: 0 1px 3px 0 rgba(46, 46, 46, 0.45), 0 1px 2px 0 rgba(255, 255, 255, 0.1);
  transition: all 500ms ease-in-out;
  top: ${({ isOpen, headerBg }): string => (isOpen ? (headerBg ? '4em' : '6.25em') : '-200em')};

  ${mq[2]} {
    width: unset;
    text-align: unset;
    background: unset;
    position: unset;
    left: unset;
    box-shadow: unset;
  }
`;

Header.HambugerIcon = styled.div<IHeaderHambugerIconProp>`
  cursor: pointer;
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
