import { accountTypes } from '../state/account';
import { authSelectors } from '../state/auth';
import { put, takeEvery, call, select } from 'redux-saga/effects';
import userApi from '../api/services/user';

const usersReceived = users => ({
  type: accountTypes.USERS_RECEIVED,
  payload: { users }
});
const usersRequestFailed = {
  type: accountTypes.USER_REQUEST_FAILED
};
const getUsers = function* getUsers(action) {
  const token = yield select(authSelectors.token);
  try {
    const resolvedCall = yield call(userApi.getUsers, token);
    if (resolvedCall.network_error) {
      console.log('Network Fail');
      yield put(usersRequestFailed);
    } else {
      if (resolvedCall.error) {
        console.log('Server Error');
        yield put(usersRequestFailed);
      } else if (resolvedCall.response) {
        if (!resolvedCall.response.data.success) {
          yield put(usersRequestFailed);
        } else {
          const { users } = resolvedCall.response.data;
          yield put(usersReceived(users));
        }
      } else {
        yield put(usersRequestFailed);
      }
    }
  } catch (error) {
    yield put(usersRequestFailed);
  }
};
const getUserData = function* getUserData(action) {
  const token = yield select(authSelectors.token);
  console.log('GET USER DATA');
  try {
    const resolvedCall = yield call(userApi.getUserData, token);
    if (resolvedCall.response.data.success) {
      const { profileData } = resolvedCall.response.data;
      yield put({
        type: accountTypes.USER_DATA_RECEIVED,
        payload: { profileData }
      });
    } else {
      yield put({
        type: accountTypes.USER_DATA_FAILED,
        payload: { error: 'Failed to get user data' }
      });
    }
  } catch (error) {
    yield put({
      type: accountTypes.USER_DATA_FAILED,
      payload: { error: 'Failed to update password' }
    });
  }
};
const updateUserData = function* updateUserData(action) {
  const token = yield select(authSelectors.token);
  const formData = action.payload.values;
  try {
    const resolvedCall = yield call(userApi.updateUserData, token, formData);
    if (resolvedCall.response.data.success) {
      yield put({
        type: accountTypes.USER_DATA_UPDATED
      });
    } else {
      yield put({
        type: accountTypes.USER_DATA_FAILED,
        payload: { error: 'Failed to update user data' }
      });
    }
  } catch (error) {
    yield put({
      type: accountTypes.USER_DATA_FAILED,
      payload: { error: 'Failed to update password' }
    });
  }
};
const updatePassword = function* updatePassword(action) {
  const token = yield select(authSelectors.token);
  const formData = action.payload.values;
  try {
    const resolvedCall = yield call(userApi.updatePassword, token, formData);
    if (resolvedCall.response.data.success) {
      yield put({
        type: accountTypes.PASSWORD_UPDATED
      });
    } else {
      yield put({
        type: accountTypes.USER_DATA_FAILED,
        payload: { error: 'Failed to update password' }
      });
    }
  } catch (error) {
    yield put({
      type: accountTypes.USER_DATA_FAILED,
      payload: { error: 'Failed to update password' }
    });
  }
};
export const accountSagas = [
  takeEvery(accountTypes.USERS_REQUESTED, getUsers),
  takeEvery(accountTypes.GET_USER_DATA, getUserData),
  takeEvery(accountTypes.UPDATE_USER_DATA, updateUserData),
  takeEvery(accountTypes.UPDATE_PASSWORD, updatePassword)
];
