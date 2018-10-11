import types from '../types';

const submitAccountForm = formValues => ({
  type: types.SUBMIT_ACCOUNT_FORM,
  payload: { formValues }
});

const persistToken = stripeToken => ({
  type: types.PERSIST_STRIPE_TOKEN,
  payload: { stripeToken }
});

const deleteToken = () => ({
  type: types.DELETE_STRIPE_TOKEN
});

const getUsers = () => ({
  type: types.USERS_REQUESTED
});

const getUserData = () => ({
  type: types.GET_USER_DATA
});
const updateUserData = values => ({
  type: types.UPDATE_USER_DATA,
  payload: { values }
});
const updatePassword = values => ({
  type: types.UPDATE_PASSWORD,
  payload: { values }
});
const clearUserData = () => ({
  type: types.CLEAR_USER_DATA
});

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
