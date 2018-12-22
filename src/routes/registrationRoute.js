// RegistrationRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RegistrationRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser && !currentUser.profile ? (
        <Component currentUser={currentUser} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default RegistrationRoute;
