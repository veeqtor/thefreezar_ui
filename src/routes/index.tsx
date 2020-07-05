/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

const privateRoutes = [dashboard];
const publicRoute = [
  home,
  comingSoon,
  forgotpassword,
  session,
  sessionDetail,
  basket,
  changePassword,
  authentication,
  checkout,
];

const isAuthenticated = true;
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
          }}
        />
      )
    }
  />
);
// export const PublicRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       !isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/dashboard',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );

const Routes = (): React.ReactElement => {
  return (
    <Switch>
      {publicRoute.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      {privateRoutes.map((route, index) => (
        <PrivateRoute key={index} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
