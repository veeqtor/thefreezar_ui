import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import DashboardSidebar from 'modules/components/Dashboard/DashbordSideBar';

interface IDashboardProps {
  children: React.ReactNode;
  isSideBarExpanded: boolean;
  changePagehandler: Function;
  toggleSidebarHandler: Function;
  logOutHandler: Function;
  currentRoute: string;
}

const DashboardLayout = (props: IDashboardProps): React.ReactElement => {
  const { isSideBarExpanded, logOutHandler, changePagehandler, toggleSidebarHandler, currentRoute, children } = props;
  return (
    <DashboardLayout.Wrapper>
      <DashboardSidebar
        sideBarExpanded={isSideBarExpanded}
        changePagehandler={changePagehandler}
        toggleSidebar={toggleSidebarHandler}
        currentRoute={currentRoute}
        logOut={logOutHandler}
      />
      <DashboardLayout.MainContent sideBarExpanded={isSideBarExpanded}>
        <DashboardLayout.MainContentWrapper>
          <span>{currentRoute}</span>
          {children}
        </DashboardLayout.MainContentWrapper>
      </DashboardLayout.MainContent>
    </DashboardLayout.Wrapper>
  );
};

DashboardLayout.Wrapper = styled.section`
  padding-top: 4em;
  padding-bottom: 2.3em;
  height: 100vh;
  display: flex;
`;

DashboardLayout.MainContentWrapper = styled.div`
  padding: 1em;
  min-height: 85vh;
  background-color: ${colors.BLACK};
  border-radius: 5px;

  & > span {
    color: ${colors.DARKER_GRAY};
    font-size: 2em;
    font-family: Futura;
    text-transform: uppercase;
  }
`;

DashboardLayout.MainContent = styled.main<{ sideBarExpanded: boolean }>`
  width: 100%;
  padding: 1em;
  background-color: ${colors.DARKER_GRAY};
  overflow: auto;
  transition: all 500ms ease-in-out;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.DARKER_GRAY};
    border-radius: 2em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${colors.LIGHT_GRAY};
    border-radius: 2em;
  }
`;

export default DashboardLayout;
