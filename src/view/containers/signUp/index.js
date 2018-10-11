// External Imports
import { connect } from 'react-redux';
// Internal Imports
import SignUpComponent from '../../components/signUp';
// Operations
import { authOperations } from '../../../state/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleSignUpSubmit: value => {
    dispatch(authOperations.signup(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
