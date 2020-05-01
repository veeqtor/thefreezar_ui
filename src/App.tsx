import * as React from 'react';
import { Global } from '@emotion/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import _globalStyle from 'styles/_global.style';
import store, { history } from 'store';
import ErrorBoundary from 'modules/components/ErrorBoundary';
import Routes from 'routes';
import Navigation from 'modules/components/Shared/Navigation';
import Footer from 'modules/components/Shared/Footer';

const App = (): React.ReactElement<{}> => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Global styles={_globalStyle} />
          <Navigation currentLocation={history.location.pathname} />
          <Routes />
          <Footer />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
