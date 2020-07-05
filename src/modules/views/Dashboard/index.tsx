/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import DashboardLayout from 'modules/layouts/DashboardLayout';
import { Switch, Route, match, Redirect } from 'react-router-dom';
import { getDashBoardRoutes } from 'routes/dashboard';
import { selectNavigation } from 'store/selectors';
import { IApplicationRootState } from 'types';
import { connect } from 'react-redux';
import { goToNextPage, savePageState } from 'store/actions/navigation';
import { getCurrentRoute } from 'utils';

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

  const changePagehandler = (pagePath: string): void => {
    if (getCurrentRoute(pathname, 'overview') === pagePath) return;
    saveState({ sideBarExpanded }), changePage(pagePath);
  };

  const logoutHandler = (): void => {
    logOutDashboard();
    console.log('Logged-Out');
  };

  return (
    <>
      <DashboardLayout
        isSideBarExpanded={sideBarExpanded}
        changePagehandler={changePagehandler}
        toggleSidebarHandler={toggleSidebar}
        currentRoute={getCurrentRoute(pathname, 'overview')}
        logOutHandler={logoutHandler}
      >
        {
          <Switch>
            {getDashBoardRoutes(path).map((route, index) => (
              <Route key={index} {...route} />
            ))}
            <Redirect to="/dashboard/overview" />
          </Switch>
        }
      </DashboardLayout>
    </>
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
