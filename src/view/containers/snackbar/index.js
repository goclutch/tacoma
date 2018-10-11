// External Imports
import { connect } from 'react-redux';
// Internal Imports
import Snackbar from '../../components/snackbar';
import { snackbarOperations } from '../../../state/snackbar';

const mapStateToProps = state => ({
  variant: state.snackbar.variant,
  message: state.snackbar.message,
  open: state.snackbar.open
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(snackbarOperations.close());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
