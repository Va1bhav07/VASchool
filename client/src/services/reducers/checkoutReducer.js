import {
  SET_CHECKOUT_COURSES,
  REMOVE_FROM_CHECKOUT,
  REMOVE_CHECKOUT_COURSES,
} from "../constants/checkoutConstants";

const initialState = {
  checkoutCoursesData: [],
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
