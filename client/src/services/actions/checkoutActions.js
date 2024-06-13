import {
  SET_CHECKOUT_COURSES,
  REMOVE_FROM_CHECKOUT,
  REMOVE_CHECKOUT_COURSES,
} from '../constants/checkoutConstants';

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
