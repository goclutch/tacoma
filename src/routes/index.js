// External Imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Internal Imports
import Views from '../view';
import PrivateRoute from './privateRoute';

const BaseRouter = () => (
  <main style={{ backgroundColor: '#eee' }}>
    <Switch>
      <Route exact path="/" component={Views.Home} />
      <Route path="/signup" component={Views.SignUp} />
      <Route path="/signin" component={Views.SignIn} />
      <Route path="/signout" component={Views.SignOut} />
      <Route component={Views.NoMatch} />
    </Switch>
  </main>
);

export default BaseRouter;
