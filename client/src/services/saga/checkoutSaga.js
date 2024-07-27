import { takeLatest, call, put } from 'redux-saga/effects';

import {
  PLACE_ODER_REQUEST,
  PLACE_ODER_SUCCESS,
  PLACE_ODER_FAIL,
} from '../constants/checkoutConstants';
import { apiAxios } from '../../utilities/axios';

function* placeOder({ payload }) {
  try {
    const url = '/api/placeOder';
    const response = yield call(apiAxios.post, url, {
      courseIds: payload?.courseIds,
      userId: payload?.userId,
    });
    if (response?.success) {
      // const { cartData } = response;
      yield put({ type: PLACE_ODER_SUCCESS, courseIds: payload?.courseIds });
    } else throw new Error('error in placeOder');
  } catch (e) {
    yield put({ type: PLACE_ODER_FAIL, message: e.message });
  }
}

export default function* watchFork() {
  yield takeLatest(PLACE_ODER_REQUEST, placeOder);
}
