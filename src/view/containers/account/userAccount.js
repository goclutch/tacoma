// External Imports
import { connect } from 'react-redux';
// Internal Imports
import UserAccoutComponent from '../../components/account/userAccount';
import { accountOperations } from '../../../state/account';

const mapStateToProps = state => ({
  profileData: state.account.user.profileData
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => {
    dispatch(accountOperations.getUserData());
  },
  updateUserData: values => {
    dispatch(accountOperations.updateUserData(values));
  },
  updatePassword: values => {
    dispatch(accountOperations.updatePassword(values));
  },
  clearUserData: () => {
    dispatch(accountOperations.clearUserData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UserAccoutComponent
);
