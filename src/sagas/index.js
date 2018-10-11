import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { accountSagas } from './account';

const rootSaga = function* rootSaga() {
  yield all([
    ...authSagas,
    ...accountSagas
  ]);
};

export default rootSaga;
