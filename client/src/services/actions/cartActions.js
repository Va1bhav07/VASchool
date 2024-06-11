import {
  REQUEST_ADD_TO_CART,
  SET_GUEST_CART_DATA,
  CART_DATA_REQUESTED,
  REQUEST_REMOVE_FROM_CART,
} from '../constants/cartConstants';

export const getCartDataAction = (courses) => {
  return {
    type: CART_DATA_REQUESTED,
    payload: courses,
  };
};

export const requestAddToCartAction = (course) => {
  return {
    type: REQUEST_ADD_TO_CART,
    payload: course,
  };
};

export const requestRemoveFromCartAction = (course) => {
  return {
    type: REQUEST_REMOVE_FROM_CART,
    payload: course,
  };
};

export const setGuestCartDataAction = (guestCartData) => {
  return {
    type: SET_GUEST_CART_DATA,
    payload: guestCartData,
  };
};
