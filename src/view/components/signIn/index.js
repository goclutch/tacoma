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
const SIGN_IN = gql`
  query SigninQuery($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      token
    }
  }
`;
class Form extends Component {
  state = {
    email: '',
    password: '',
    errors: []
  };
  onSignInFetched = result => {
    console.log(result);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(result.signin.token));
  };

  async fetchSignIn(client, getCurrentUser) {
    await client
      .query({
        query: SIGN_IN,
        variables: { email: this.state.email, password: this.state.password }
      })
      .then(({ data }) => {
        this.onSignInFetched(data);
        getCurrentUser();
      })
      .catch(({ graphQLErrors }) => {
        //This variable returns an array of errors
        if (!graphQLErrors) return;
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
  clearFields = () => this.setState({ email: '', password: '' });
  render() {
    const { classes, getCurrentUser } = this.props;
    const { errors } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <FormWrapper size="standard">
            <form className={classes.formWrapper}>
              <div>
                <h1>Sign In</h1>
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
                </Grid>
                <div className={classes.formButtonWrapper}>
                  <Button onClick={this.clearFields}>Clear Values</Button>
                  <Button
                    onClick={this.fetchSignIn.bind(
                      this,
                      client,
                      getCurrentUser
                    )}
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
