// External Imports
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// External Components
import { Checkbox, TextField } from 'redux-form-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Internal Imports
import FormWrapper from '../common/formWrapper';
import validators from '../utility/validators';
import FormError from '../common/formError';

const styles = theme => ({
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 20
  }
});

class Form extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      error
    } = this.props;
    return (
      <FormWrapper size="standard">
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
          <h1>Sign Up</h1>
          <Grid spacing={16} container alignItems="center" justify="center">
            <Grid item>
              <Field
                label="First Name"
                name="firstName"
                component={TextField}
                placeholder="First Name"
                validate={[validators.required]}
              />
            </Grid>
            <Grid item>
              <Field
                label="Last Name"
                name="lastName"
                component={TextField}
                placeholder="Last Name"
                validate={[validators.required]}
              />
            </Grid>
            <Grid item>
              <Field
                label="Username"
                name="username"
                component={TextField}
                placeholder="Enter a Username"
                validate={[validators.required]}
              />
            </Grid>
            <Grid item>
              <Field
                label="Password"
                name="password"
                type="password"
                component={TextField}
                placeholder="Enter a Password"
                validate={[validators.required, validators.minLength6]}
              />
            </Grid>
            <Grid item>
              <Field
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                component={TextField}
                placeholder="Confirm Password"
                validate={[validators.required]}
              />
            </Grid>
            {error && (
              <Grid item>
                <FormError errorText={error} />
              </Grid>
            )}
            <Grid item>
              <FormControlLabel
                control={<Field name="agreeToTerms" component={Checkbox} />}
                label="Agree to terms?"
              />
            </Grid>
          </Grid>
          <div className={classes.formButtonWrapper}>
            <Button disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
            <Button type="submit" disabled={submitting}>
              Submit
            </Button>
          </div>
        </form>
      </FormWrapper>
    );
  }
}
const validate = values => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  return warnings;
};
// Decorate with redux-form
const SignUpForm = reduxForm({
  form: 'signUpForm',
  validate,
  warn
})(Form);

export default withStyles(styles)(SignUpForm);
