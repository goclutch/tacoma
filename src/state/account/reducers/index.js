import { combineReducers } from 'redux';
import language from './language';
import billing from './billing';
import users from './users';
import user from './user';

const account = combineReducers({
  language,
  billing,
  users,
  user
});

export default account;
