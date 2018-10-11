import { authTypes } from '../state/auth';
import { put, takeEvery, call } from 'redux-saga/effects';
import authApi from '../api/services/auth';
import { push } from 'react-router-redux';
import { startSubmit, stopSubmit } from 'redux-form';

const fetchSignin = function* fetchSignin(action) {
  try {
    yield put(startSubmit('signInForm'));
    let errors = {};
    const { username, password } = action.data;
    const resolvedCall = yield call(authApi.signin, username, password);
    if (resolvedCall.network_error) {
      errors = { _error: 'Could not submit request due to network error.' };
      yield put({
        type: authTypes.AUTHENTICATION_FAILURE,
        payload: { error: true, errorText: 'Network Error' }
      });
    } else {
      if (resolvedCall.error) {
        yield put({
          type: authTypes.AUTHENTICATION_FAILURE,
          payload: { error: true, errorText: 'Error in Signing In' }
        });
        errors = resolvedCall.error.response.data.errors;
      } else if (resolvedCall.response) {
        const { token, userManifest } = resolvedCall.response.data;
        localStorage.setItem('token', token);
        yield put({
          type: authTypes.AUTHENTICATED,
          payload: { token }
        });
        console.log(userManifest);
        yield put(push('/dashboard'));
      } else {
        yield put({
          type: authTypes.AUTHENTICATION_FAILURE,
          payload: { error: true, errorText: 'Unknown Error Occurred' }
        });
        errors = { _error: 'Unknown Error Occurred.' };
      }
    }
    yield put(stopSubmit('signInForm', errors));
  } catch (error) {
    yield put(startSubmit('signInForm'));
    console.log(error);
    let errors = { errors: { _error: 'Invalid username or password' } };
    yield put({
      type: authTypes.AUTHENTICATION_FAILURE,
      payload: { error: true, errorText: 'Network Error' }
    });
    yield put(stopSubmit('signInForm', errors));
  }
};

const fetchSignup = function* fetchSignup(action) {
  let errors = {};
  yield put(startSubmit('signUpForm'));
  try {
    const { username, password, firstName, lastName } = action.data;
    const resolvedCall = yield call(
      authApi.signup,
      username,
      password,
      firstName,
      lastName
    );
    if (resolvedCall.network_error) {
      yield put({
        type: authTypes.AUTHENTICATION_FAILURE,
        payload: { error: true, errorText: 'Network Error' }
      });
      errors = { errors: { _error: 'Network Error' } };
    } else {
      if (resolvedCall.error) {
        yield put({
          type: authTypes.AUTHENTICATION_FAILURE,
          payload: { error: true, errorText: 'Error in Creating Account' }
        });
        errors = resolvedCall.error.response.data.errors;
      } else if (resolvedCall.response) {
        const token = resolvedCall.response.data.token;
        localStorage.setItem('token', token);
        yield put({
          type: authTypes.AUTHENTICATED,
          payload: { token }
        });
        console.log('ATTEMP TO PUSH ROUTE');
        yield put(push('/register'));
      } else {
        yield put({
          type: authTypes.AUTHENTICATION_FAILURE,
          payload: { error: true, errorText: 'Unknown Error Occurred' }
        });
        errors = { errors: { _error: 'Unknown Error' } };
      }
    }
  } catch (error) {
    errors = { errors: { _error: 'Network Error' } };
    yield put({
      type: authTypes.AUTHENTICATION_FAILURE,
      payload: { error: true, errorText: 'Network Error' }
    });
  }
  yield put(stopSubmit('signUpForm', errors));
};

export const authSagas = [
  takeEvery(authTypes.SIGNIN_ATTEMPT, fetchSignin),
  takeEvery(authTypes.SIGNUP_ATTEMPT, fetchSignup)
];
