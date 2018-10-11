// External Imports
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const renderPrivateRoute = (Component, props) => {
  const { auth } = props;
  if (auth ) return <Component {...props} />;
  // else if (auth && !registered)
  //   return (
  //     <Redirect
  //       to={{ pathname: '/register', state: { from: props.location } }}
  //     />
  //   );
  else
    return (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    );
};

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route {...props} render={renderPrivateRoute.bind(null, Component, props)} />
);

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
