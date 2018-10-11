import types from '../types';

const updateField = (field, value) => ({
  type: types.UPDATE_FIELD,
  payload: { field, value }
});

const signin = data => ({
  type: types.SIGNIN_ATTEMPT,
  data
});

const signup = data => ({
  type: types.SIGNUP_ATTEMPT,
  data
});

const signout = () => ({
  type: types.UNAUTHENTICATED
});

export default {
  updateField,
  signin,
  signup,
  signout
};
