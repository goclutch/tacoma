import { combineReducers } from 'redux';
import form from './form';
import auth from './auth';
import account from './account';
import theme from './theme';
import drawer from './drawer';
import snackbar from './snackbar';
import { routerReducer as router } from 'react-router-redux';

export default combineReducers({
  form,
  auth,
  account,
  theme,
  router,
  drawer,
  snackbar,
});
