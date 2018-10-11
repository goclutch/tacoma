import React, { Component } from 'react';
import Form from './form';

class SignOut extends Component {
  componentDidMount = () => {
    this.props.signOut();
  };
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
export default SignOut;
