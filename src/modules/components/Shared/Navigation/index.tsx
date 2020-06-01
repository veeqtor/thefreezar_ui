import * as React from 'react';
import styled from '@emotion/styled';

import NavLinks from 'modules/components/Shared/Navigation/NavLinks';
import Header from 'modules/components/Shared/Navigation/Header';
import { colors } from 'styles/_variables.style';
import DashboardNav from 'modules/components/Dashboard/DashboardNav';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface INavigationProps {
  isDashboard: boolean;
  currentLocation: string;
}
const Navigation = ({ isDashboard, currentLocation }: INavigationProps): React.ReactElement => {
  const ref = React.useRef({}) as React.MutableRefObject<HTMLElement>;
  const [navState, setNavState] = React.useState(false);
  const [headerBg, setHeaderBg] = React.useState(false);

  const toggleHamburgerIcon = (): void => {
    setNavState(!navState);
  };

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
    <Navigation.Wrapper>
      <Header
        elmRef={ref}
        location={currentLocation}
        toggleHamburgerIcon={toggleHamburgerIcon}
        isDashboard={isDashboard}
        headerBg={headerBg}
        navState={navState}
      >
        {isDashboard ? <DashboardNav /> : <NavLinks location={currentLocation} />}
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
