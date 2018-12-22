// External Imports
import React, { Component } from 'react';
// External Components
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
// Internal Imports
import FormWrapper from '../common/formWrapper';
import { AUTH_TOKEN } from '../../../utility/constants';

const styles = theme => ({
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 20
  }
});
const SIGN_UP = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signup(
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      id
      token
    }
  }
`;
class Form extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: []
  };
  onSignUpFetched = result => {
    console.log(result);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(result.signup.token));
  };

  async fetchSignUp(client, event) {
    event.preventDefault();
    await client
      .mutate({
        mutation: SIGN_UP,
        variables: {
          email: this.state.email,
          password: this.state.password,
          passwordConfirmation: this.state.passwordConfirmation
        }
      })
      .then(({ data }) => {
        this.onSignUpFetched(data);
      })
      .catch(({ graphQLErrors }) => {
        //This variable returns an array of errors
        console.log('Error: ', graphQLErrors[0].message);
        const errors = graphQLErrors.map(graphQLError => graphQLError.message);
        this.setState({ errors, password: '' });
      });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  renderErrors = () => (
    <Grid item>
      {this.state.errors.map(error => (
        <Chip label={error} />
      ))}
    </Grid>
  );
  clearFields = () =>
    this.setState({ email: '', password: '', passwordConfirmation: '' });
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <FormWrapper size="standard">
            <form className={classes.formWrapper}>
              <div>
                <h1>Sign Up</h1>
                <Grid
                  container
                  spacing={24}
                  alignItems="center"
                  justify="center"
                >
                  {errors.length > 0 && this.renderErrors()}
                  <Grid item>
                    <TextField
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Confirm Password"
                      value={this.state.passwordConfirmation}
                      onChange={this.handleChange('passwordConfirmation')}
                    />
                  </Grid>
                </Grid>
                <div className={classes.formButtonWrapper}>
                  <Button onClick={this.clearFields}>Clear Values</Button>
                  <Button
                    type="submit"
                    onClick={this.fetchSignUp.bind(this, client)}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </FormWrapper>
        )}
      </ApolloConsumer>
    );
  }
}

// Decorate with redux-form

export default withStyles(styles)(Form);
