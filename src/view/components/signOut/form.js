// External Imports
import React, { Component } from 'react';
// External Components
import { withStyles } from '@material-ui/core/styles';
// Internal Imports
import FormWrapper from '../common/formWrapper';

const styles = theme => ({
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 20
  }
});

class Form extends Component {
  render() {
    return (
      <FormWrapper size="standard">
        <div>
          <h1>Sign Out</h1>
          <p>You have successfully signed out.</p>
        </div>
      </FormWrapper>
    );
  }
}

export default withStyles(styles)(Form);
