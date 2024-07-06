import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_TOKEN_REQUEST,
} from '../constants';

import { PLACE_ODER_SUCCESS } from '../constants/checkoutConstants';

const initialState = {
  userData: {},
  isLoggedIn: false,
  message: '',
  isLoading: true,
};

export const authReducer = (
  state = initialState,
  { type, user, message, courseIds }
) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userData: { ...user?.foundUser },
        isLoggedIn: true,
        message: user?.message || '',
        isLoading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        userData: {},
        isLoggedIn: false,
        message,
        isLoading: false,
      };
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        userData: { ...user?.newUser },
        isLoggedIn: true,
        message: user?.message || '',
        isLoading: false,
      };
    case USER_SIGN_IN_FAIL:
      return {
        ...state,
        userData: {},
        isLoggedIn: false,
        message,
        isLoading: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        message: user?.message || '',
      };
    case USER_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PLACE_ODER_SUCCESS:
      return {
        ...state,
        userData: {
          ...state.userData,
          myCoursesIds: [...(state.userData?.myCoursesIds || []), ...courseIds],
        },
      };
    default:
      return {
        ...state,
      };
  }
};
