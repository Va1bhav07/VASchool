import {
  USER_LOGIN_REQUESTED,
  USER_SIGN_IN_REQUESTED,
  USER_LOGOUT_REQUESTED,
  USER_TOKEN_REQUEST,
} from '../constants';

export const loginAction = (data) => {
  return {
    type: USER_LOGIN_REQUESTED,
    payload: data,
  };
};

export const signInAction = (data) => {
  return {
    type: USER_SIGN_IN_REQUESTED,
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: USER_LOGOUT_REQUESTED,
  };
};

export const tokenAction = () => {
  return {
    type: USER_TOKEN_REQUEST,
  };
};
