// External Imports
import { connect } from 'react-redux';
// Internal Imports
import SignInComponent from '../../components/signIn';
// Operations
import { authOperations } from '../../../state/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleSignInSubmit: value => {
    dispatch(authOperations.signin(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
