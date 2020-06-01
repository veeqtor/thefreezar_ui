import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import home from 'routes/home';
import comingSoon from 'routes/comingSoon';
import booking from 'routes/booking';
import bookingDetail from 'routes/bookingDetail';
import dashboard from 'routes/dashboard';

const routes = [home, comingSoon, booking, bookingDetail, dashboard];

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
