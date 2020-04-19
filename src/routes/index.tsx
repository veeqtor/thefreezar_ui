import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import home from 'routes/home';
import comingSoon from 'routes/comingSoon';

const routes = [home, comingSoon];

const Routes = (): React.ReactElement => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
