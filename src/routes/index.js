// External Imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Internal Imports
import Views from '../view';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import RegistrationRoute from './registrationRoute';

const Routes = ({ data, getCurrentUser }) => (
  <main style={{ backgroundColor: '#eee' }}>
    <Switch>
      <PublicRoute exact path="/" component={Views.Home} />
      <PublicRoute
        path="/signup"
        component={Views.SignUp}
        getCurrentUser={getCurrentUser}
      />
      <PublicRoute
        path="/signin"
        component={Views.SignIn}
        getCurrentUser={getCurrentUser}
      />
      <RegistrationRoute path="registration" component={Views.Registration} />
      <PrivateRoute path="/home" component={Views.Home} />
      <Route component={Views.NoMatch} />
    </Switch>
  </main>
);

export default Routes;
