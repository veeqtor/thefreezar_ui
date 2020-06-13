/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import DashboardLayout from 'modules/layouts/DashboardLayout';
import SEO from 'modules/components/SEO';
import { Switch, Route, match, Redirect } from 'react-router-dom';
import { getDashBoardRoutes } from 'routes/dashboard';
import { selectNavigation } from 'store/selectors';
import { IApplicationRootState } from 'types';
import { connect } from 'react-redux';
import { goToNextPage, savePageState } from 'store/actions/navigation';

export interface IDashboardProps {
  title: string;
  match: match<{}>;
  location: Location;
  navigation: Record<string, any>;
  changePage: (pathname: string) => void;
  logOutDashboard: () => void;
  saveState: (obj: Record<string, any>) => void;
}

const Dashboard = (props: IDashboardProps): React.ReactElement => {
  const {
    title,
    match: { path },
    navigation,
    location: { pathname },
    changePage,
    saveState,
    logOutDashboard,
  } = props;

  const [sideBarExpanded, setSideBarExpanded] = React.useState(navigation.data.dashboard.sideBarExpanded);

  const toggleSidebar = (): void => {
    setSideBarExpanded(!sideBarExpanded);
  };
  const getCurrentRoute = (): string => {
    let current = 'overview';
    const slicedPathname = pathname.split('/').slice(-2);
    if (slicedPathname[1]) {
      current = slicedPathname[1];
    } else if (slicedPathname[0]) {
      current = slicedPathname[0];
    }
    return current;
  };

  const changePagehandler = (pathname: string): void => {
    if (getCurrentRoute() === pathname) return;
    saveState({ sideBarExpanded }), changePage(pathname);
  };

  const logoutHandler = (): void => {
    logOutDashboard();
    console.log('Logged-Out');
  };

  return (
    <DashboardLayout
      isSideBarExpanded={sideBarExpanded}
      changePagehandler={changePagehandler}
      toggleSidebarHandler={toggleSidebar}
      currentRoute={getCurrentRoute()}
      logOutHandler={logoutHandler}
    >
      <SEO title={title} />
      {
        <Switch>
          {getDashBoardRoutes(path).map((route, index) => (
            <Route key={index} {...route} />
          ))}
          <Redirect to="/dashboard/overview" />
        </Switch>
      }
    </DashboardLayout>
  );
};

Dashboard.Layout = styled.section``;

const mapStateToProps = (state: IApplicationRootState): any => ({
  navigation: selectNavigation(state),
});

const mapDispatchToProps = (
  dispatch: Function,
): Pick<IDashboardProps, 'changePage' | 'saveState' | 'logOutDashboard'> => ({
  changePage: (pathname: string): void => dispatch(goToNextPage({ nextPageRoute: `/dashboard/${pathname}` })),
  logOutDashboard: (): void => dispatch(goToNextPage({ nextPageRoute: `/` })),
  saveState: (obj: Record<string, any>): void =>
    dispatch(
      savePageState({
        data: {
          dashboard: obj,
        },
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
