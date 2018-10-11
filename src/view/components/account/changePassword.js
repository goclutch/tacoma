// External Imports
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// External Components
import { TextField } from 'redux-form-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Internal Imports
import FormWrapper from '../common/formWrapper';
import validators from '../utility/validators';

const styles = theme => ({
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 20
  }
});

class ChangePassword extends Component {
  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <FormWrapper size="standard">
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
          <h1>Profile</h1>
          <Grid spacing={16} container alignItems="center" justify="center">
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
          </Grid>
          <div className={classes.formButtonWrapper}>
            <Button disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
            <Button type="submit" disabled={submitting}>
              Save
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
const ChangePasswordForm = reduxForm({
  form: 'signUpForm',
  validate,
  warn
})(ChangePassword);

export default withStyles(styles)(ChangePasswordForm);
