// External Imports
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Internal Imports
import AppBarComponent from '../../components/appBar';
import { drawerOperations } from '../../../state/drawer';

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => {
    dispatch(drawerOperations.openDrawer());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppBarComponent)
);
