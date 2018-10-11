import actions from '../actions';

const submitAccountForm = actions.submitAccountForm;
const persistToken = actions.persistToken;
const deleteToken = actions.deleteToken;
const getUsers = actions.getUsers;
const getUserData = actions.getUserData;
const updateUserData = actions.updateUserData;
const updatePassword = actions.updatePassword;
const clearUserData = actions.clearUserData;

export default {
  submitAccountForm,
  persistToken,
  deleteToken,
  getUsers,
  getUserData,
  updateUserData,
  updatePassword,
  clearUserData
};
