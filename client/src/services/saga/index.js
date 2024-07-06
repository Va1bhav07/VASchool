import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import courseSaga from './courseSaga';
import cartSaga from './cartSaga';
import checkoutSaga from './checkoutSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(courseSaga),
    fork(cartSaga),
    fork(checkoutSaga),
  ]);
}
