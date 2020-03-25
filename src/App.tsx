import * as React from 'react';
import { Global } from '@emotion/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

import _globalStyle from './styles/_global.style';
import routes from './routes';
import store, { history } from './store';
import ErrorBoundary from './components/layouts/ErrorBoundary';

const App = (): React.ReactElement<{}> => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Global styles={_globalStyle} />
          <Switch>
            {routes.map(({ url, exact, title, component: Component }, index) => (
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              <Route key={index} path={url} exact={exact} render={props => <Component {...props} title={title} />} />
            ))}
            <Redirect to="/" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
