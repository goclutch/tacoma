// PublicRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const evaluateRender = (props, currentUser, Component) => {
  if (!currentUser) {
    return <Component currentUser={currentUser} {...props} />;
  } else if (currentUser && !currentUser.profile) {
    return (
      <Redirect
        to={{
          pathname: '/registration',
          state: { from: props.location }
        }}
      />
    );
  } else if (currentUser && currentUser.profile) {
    return (
      <Redirect
        to={{
          pathname: '/home',
          state: { from: props.location }
        }}
      />
    );
  }
};
const PublicRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props => evaluateRender(props, currentUser, Component)}
  />
);

export default PublicRoute;
