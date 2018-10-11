import React from 'react';
import Form from './form';

let SignIn = ({ handleSignInSubmit, values }) => (
  <div>
    <Form onSubmit={values => handleSignInSubmit(values)} />
  </div>
);

export default SignIn;
