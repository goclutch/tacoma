import React from 'react';
import Form from './form';

let SignUp = ({ handleSignUpSubmit, values }) => (
  <div>
    <Form onSubmit={values => handleSignUpSubmit(values)} />
  </div>
);

export default SignUp;
