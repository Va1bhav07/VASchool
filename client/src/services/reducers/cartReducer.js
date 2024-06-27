import {
  CART_DATA_REQUESTED,
  CART_DATA_SUCCESS,
  CART_DATA_FAIL,
  SET_GUEST_CART_DATA,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from '../constants/cartConstants';
import {
  ADD_CART_INFO_SUCCESS,
  ADD_CART_INFO_FAIL,
  USER_LOGOUT_SUCCESS,
} from '../constants';

const initialState = {
  cartInfo: {},
  cartData: [],
  message: '',
  isLoading: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartInfo: {
          ...action.cartInfo,
          courses: [...(action?.cartInfo?.courses || [])],
        },
      };
    case ADD_CART_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };

    case CART_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case CART_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartData: action?.cartData,
      };

    case CART_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action?.message,
      };

    case SET_GUEST_CART_DATA:
      return {
        ...state,
        isLoading: false,
        cartInfo: {
          ...state.cartInfo,
          courses: action.payload,
        },
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartInfo: {
          ...state.cartInfo,
          courses: [...(state?.cartInfo?.courses || []), action.courseId],
        },
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartInfo: {
          ...state.cartInfo,
          courses: state.cartInfo.courses.filter(
            (courseId) => courseId !== action.courseId.toString()
          ),
        },

        cartData: state.cartData.filter(
          (course) => course._id !== action.courseId
        ),
      };

    case REMOVE_FROM_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.message,
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
