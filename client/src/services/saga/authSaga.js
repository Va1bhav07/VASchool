import { takeLatest, call, put } from "redux-saga/effects";
import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGN_IN_REQUESTED,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_TOKEN_REQUEST,
  USER_LOGOUT_REQUESTED,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  ADD_CART_INFO_SUCCESS,
  ADD_CART_INFO_FAIL,
} from "../constants";
import { apiAxios } from "../../utilities/axios";

function* fetchLogin(action) {
  try {
    const url = "/login";
    const user = yield call(apiAxios.post, url, action.payload);
    console.log("fetchLogin user :>> ", user);
    if (user) {
      yield put({ type: USER_LOGIN_SUCCESS, user });
      yield put({
        type: ADD_CART_INFO_SUCCESS,
        cartInfo: user?.foundUser?.cartData,
      });
      localStorage.setItem("userLogin", true);
      localStorage.removeItem("encryptedCartData", true);
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: USER_LOGIN_FAIL, message: e.message });
    yield put({ type: ADD_CART_INFO_FAIL, message: e.message });
  }
}

function* signInUser(action) {
  try {
    const url = "/signup";
    const user = yield call(apiAxios.post, url, action.payload);
    console.log("Signup user :>> ", user);
    if (user) {
      yield put({ type: USER_SIGN_IN_SUCCESS, user });
      yield put({
        type: ADD_CART_INFO_SUCCESS,
        cartInfo: user?.newUser?.cartData,
      });
      localStorage.setItem("userLogin", true);
      localStorage.removeItem("encryptedCartData", true);
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: USER_SIGN_IN_FAIL, message: e.message });
    yield put({ type: ADD_CART_INFO_FAIL, message: e.message });
  }
}

function* checkUserToken() {
  try {
    const url = "/api/accessToken";
    const user = yield call(apiAxios.get, url);
    console.log("accessToken user :>> ", user);
    if (user) {
      yield put({ type: USER_LOGIN_SUCCESS, user });
      yield put({
        type: ADD_CART_INFO_SUCCESS,
        cartInfo: user?.foundUser?.cartData,
      });
    } else throw new Error("access Token not found");
  } catch (e) {
    localStorage.removeItem("userLogin");
    yield put({ type: USER_LOGIN_FAIL, message: e.message });
    yield put({ type: ADD_CART_INFO_FAIL, message: e.message });
  }
}

function* logout() {
  try {
    const url = "/api/logout";
    const user = yield call(apiAxios.get, url);
    console.log("user :>> ", user);
    yield put({ type: USER_LOGOUT_SUCCESS, user });
    const localStorageItems = ["userLogin", "encryptedCartData"];
    localStorageItems.forEach((key) => localStorage.removeItem(key));
  } catch (e) {
    yield put({ type: USER_LOGOUT_FAIL, message: e.message });
  }
}

export default function* watchFork() {
  yield takeLatest(USER_LOGIN_REQUESTED, fetchLogin);
  yield takeLatest(USER_SIGN_IN_REQUESTED, signInUser);
  yield takeLatest(USER_TOKEN_REQUEST, checkUserToken);
  yield takeLatest(USER_LOGOUT_REQUESTED, logout);
}
