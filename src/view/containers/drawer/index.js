// External Imports
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Internal Imports
import DrawerComponent from '../../components/drawer/drawer';
import { drawerOperations } from '../../../state/drawer';

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
  mobileOpen: state.drawer.open,
  drawerLists: state.drawer.lists,
  userAccess: state.registration.userAccess
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => {
    dispatch(drawerOperations.closeDrawer());
  },
  toggleDrawerList: listName => {
    dispatch(drawerOperations.toggleDrawerList(listName));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerComponent)
);
