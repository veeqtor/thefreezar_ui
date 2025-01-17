import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import home from 'routes/home';
import comingSoon from 'routes/comingSoon';
import session from 'routes/session';
import sessionDetail from 'routes/sessionDetail';
import dashboard from 'routes/dashboard';
import basket from 'routes/basket';
import checkout from 'routes/checkout';
import authentication from 'routes/authentication';
import forgotpassword from 'routes/forgotpassword';
import changePassword from 'routes/changePassword';

const routes = [
  home,
  comingSoon,
  session,
  sessionDetail,
  basket,
  checkout,
  authentication,
  forgotpassword,
  changePassword,
  dashboard,
];

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
