import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CART_DATA_REQUESTED,
  CART_DATA_SUCCESS,
  CART_DATA_FAIL,
  REQUEST_ADD_TO_CART,
  REQUEST_REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from '../constants/cartConstants';
import { apiAxios } from '../../utilities/axios';

function* fetchUserCourses(action) {
  try {
    console.log('action :>> ', action);
    const url = '/api/getCartData';
    const response = yield call(apiAxios.post, url, {
      courseIds: action.payload,
    });
    if (response?.cartData?.length) {
      const { cartData } = response;
      console.log('fetchLogin user :>> ', cartData);

      yield put({ type: CART_DATA_SUCCESS, cartData });
    } else throw new Error('error in fetchUserCourses');
  } catch (e) {
    yield put({ type: CART_DATA_FAIL, message: e.message });
  }
}

function* SetUserCart({ payload }) {
  try {
    const url = '/api/addToCart';
    const response = yield call(apiAxios.post, url, payload);
    if (response?.success) {
      yield put({ type: ADD_TO_CART_SUCCESS, courseId: payload?.courseId });
    } else throw new Error('error in SetUserCart');
  } catch (err) {
    yield put({ type: ADD_TO_CART_FAIL, message: err.message });
    console.log('err in cart :>> ', err);
  }
}

function* RemoveCartItem({ payload }) {
  try {
    const url = '/api/deleteFromCart';
    const response = yield call(apiAxios.delete, url, payload);
    if (response?.success) {
      yield put({
        type: REMOVE_FROM_CART_SUCCESS,
        courseId: payload?.courseId,
      });
    } else throw new Error('error in RemoveCartItem');
  } catch (err) {
    yield put({ type: REMOVE_FROM_CART_FAIL, message: err.message });
    console.log('err in cart :>> ', err);
  }
}

export default function* watchFork() {
  yield takeLatest(CART_DATA_REQUESTED, fetchUserCourses);
  yield takeLatest(REQUEST_ADD_TO_CART, SetUserCart);
  yield takeLatest(REQUEST_REMOVE_FROM_CART, RemoveCartItem);
}
