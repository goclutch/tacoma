// External Imports
import { connect } from 'react-redux';
// Internal Imports
import SignOutComponent from '../../components/signOut';
// Operations
import { authOperations } from '../../../state/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(authOperations.signout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutComponent);
