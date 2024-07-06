import {
  PLACE_ODER_REQUEST,
  SET_ODER_PLACED_TO_INIT,
  SET_CHECKOUT_COURSES,
  REMOVE_FROM_CHECKOUT,
  REMOVE_CHECKOUT_COURSES,
} from '../constants/checkoutConstants';

export const placeOderRequestAction = (courseIds) => {
  return {
    type: PLACE_ODER_REQUEST,
    payload: courseIds,
  };
};

export const setOderplaceToInit = () => {
  return {
    type: SET_ODER_PLACED_TO_INIT,
  };
};

export const setCheckoutCoursesAction = (courses) => {
  return {
    type: SET_CHECKOUT_COURSES,
    payload: courses,
  };
};

export const removeCheckoutCoursesAction = () => {
  return {
    type: REMOVE_CHECKOUT_COURSES,
  };
};
export const removeFromCheckoutAction = (id) => {
  return {
    type: REMOVE_FROM_CHECKOUT,
    payload: id,
  };
};
