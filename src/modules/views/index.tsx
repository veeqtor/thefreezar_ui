/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Routes from 'routes';
import Navigation from 'modules/components/Shared/Navigation';
import * as AppFooter from 'modules/components/Shared/Footer';
import { connect } from 'react-redux';
import { IApplicationRootState } from 'types';
import { Layout } from 'antd';

interface IViewsProps {
  location: Record<string, any>;
}
const { Header, Footer, Content } = Layout;
const Views = (props: IViewsProps): React.ReactElement<{}> => {
  const { location } = props;
  const [isDashboard, setIsDashboard] = React.useState(false);

  const checkisDashboard = (pathname: string): void => {
    const arr = pathname.split('/');
    arr.includes('dashboard') ? setIsDashboard(true) : setIsDashboard(false);
  };

  React.useEffect(() => {
    checkisDashboard(location.pathname);
  }, [location]);

  return (
    <>
      <Layout>
        <Header>
          <Navigation isDashboard={isDashboard} currentLocation={location.pathname} />
        </Header>
        <Content>
          <Routes />
        </Content>
        <Footer>
          <AppFooter.default />
        </Footer>
      </Layout>
    </>
  );
};

const mapStateToProps = (state: IApplicationRootState): Pick<IViewsProps, 'location'> => ({
  location: state.router.location,
});

export default connect(mapStateToProps, null)(Views);
