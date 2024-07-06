import {
  PLACE_ODER_SUCCESS,
  SET_ODER_PLACED_TO_INIT,
  SET_CHECKOUT_COURSES,
  REMOVE_FROM_CHECKOUT,
  REMOVE_CHECKOUT_COURSES,
  PLACE_ODER_FAIL,
} from '../constants/checkoutConstants';
import { USER_LOGOUT_SUCCESS } from '../constants/index';

const initialState = {
  checkoutCoursesData: [],
  isLoading: true,
  isOderPlaced: false,
  message: '',
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ODER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOderPlaced: true,
      };
    case PLACE_ODER_FAIL:
      return {
        ...state,
        isLoading: false,
        isOderPlaced: false,
      };
    case SET_ODER_PLACED_TO_INIT:
      return {
        ...state,
        isOderPlaced: false,
      };
    case SET_CHECKOUT_COURSES:
      return {
        ...state,
        checkoutCoursesData: action.payload,
      };
    case REMOVE_FROM_CHECKOUT:
      return {
        ...state,
        checkoutCourses: state.checkoutCoursesData.filter(
          (course) => course._id.toString() !== action.payload.toString()
        ),
      };

    case REMOVE_CHECKOUT_COURSES:
      return {
        ...initialState,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...initialState,
        message: action?.message || '',
      };
    default:
      return state;
  }
};
