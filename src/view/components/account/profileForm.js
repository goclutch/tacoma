// External Imports
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// External Components
import { TextField } from 'redux-form-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
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

class Form extends Component {
  componentWillUnmount = () => {
    this.props.clearUserData();
  };
  componentDidMount = () => {
    this.props.getUserData();
  };
  renderPending = () => (
    <Paper className={this.props.classes.statusContainer}>
      <Typography
        variant="title"
        color="inherit"
        className={this.props.classes.title}
      >
        Retrieving Invite Data
      </Typography>
      <CircularProgress className={this.props.classes.progress} size={50} />
    </Paper>
  );
  renderForm() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <FormWrapper size="standard">
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
          <h1>Profile</h1>
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
                label="Email"
                name="email"
                type="email"
                component={TextField}
                placeholder="Enter a Email"
                validate={[validators.required, validators.minLength6]}
              />
            </Grid>
            <Grid item>
              <Field
                label="Phone Number"
                name="phone"
                component={TextField}
                placeholder="Enter a Phone Number"
                validate={[validators.required]}
              />
            </Grid>
          </Grid>
          <div className={classes.formButtonWrapper}>
            <Button type="submit" disabled={submitting}>
              Save
            </Button>
          </div>
        </form>
      </FormWrapper>
    );
  }
  render() {
    if (!this.props.initialValues) return this.renderPending();
    return this.renderForm();
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
const ProfileForm = reduxForm({
  form: 'signUpForm',
  validate,
  warn,
  enableReinitialize: true
})(Form);

export default withStyles(styles)(ProfileForm);
