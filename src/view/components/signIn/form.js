// External Imports
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// External Components
import { TextField } from 'redux-form-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// Internal Imports
import validators from '../utility/validators';
import FormWrapper from '../common/formWrapper';
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
          <div>
            <h1>Sign In</h1>
            <Grid container spacing={24} alignItems="center" justify="center">
              <Grid item>
                <Field
                  name="username"
                  component={TextField}
                  placeholder="Username"
                  validate={[validators.required]}
                />
              </Grid>
              <Grid item>
                <Field
                  name="password"
                  type="password"
                  component={TextField}
                  placeholder="Password"
                  validate={[validators.required]}
                />
              </Grid>
              {error && (
                <Grid item>
                  <FormError errorText={error} />
                </Grid>
              )}
            </Grid>
            <div className={classes.formButtonWrapper}>
              <Button disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </Button>
              <Button type="submit" disabled={submitting}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

// Decorate with redux-form
const SignInForm = reduxForm({
  form: 'signInForm'
})(Form);

export default withStyles(styles)(SignInForm);
