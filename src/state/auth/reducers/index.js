import types from '../types';

const initialState = {
  authenticated: false,
  token: '',
  usernameError: '',
  passwordError: '',
  signinAttempted: false,
  signupAttempted: false,
  error: false,
  errorText: '',
  signinAttempts: 0,
  signupAttempts: 0
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATED:
      console.log(action);
      return { ...state, authenticated: true, token: action.payload.token };
    case types.UNAUTHENTICATED:
      localStorage.clear();
      return { ...state, authenticated: false, token: null };
    case types.AUTHENTICATION_FAILURE:
      let { error, errorText, usernameError, passwordError } = action.payload;
      return {
        ...state,
        attempted: true,
        error,
        errorText,
        usernameError,
        passwordError
      };
    case types.SIGNUP_ATTEMPT:
      return {
        ...state,
        signupAttempted: true,
        signupAttempts: state.signupAttempts + 1
      };
    case types.AUTHENTICATION_ATTEMPT:
      return {
        ...state,
        signinAttempted: true,
        signinAttempts: state.signinAttempts + 1
      };
    case types.UPDATE_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};
export default auth;
