import { useSelector, useDispatch } from 'react-redux';
import {
  requestAddToCartAction,
  requestRemoveFromCartAction,
} from '../services/actions/cartActions';
import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from '../services/constants/cartConstants';

import {
  setEncryptedGuestCartData,
  getDecryptedGuestCartData,
} from '../utilities/cartUtilities';
import { toast } from 'react-toastify';

export const useCartHandler = () => {
  const { isLoggedIn, userData } = useSelector(
    ({ authReducer }) => authReducer
  );
  const dispatch = useDispatch();
  const userId = userData._id;

  const handleAddToCart = (course) => {
    const courseId = course._id;

    if (isLoggedIn) {
      return dispatch(requestAddToCartAction({ userId, courseId }));
    }
    const decryptedGuestCartData = getDecryptedGuestCartData();
    console.log(
      'decryptedGuestCartData from useCartHandler :>> ',
      decryptedGuestCartData,
      courseId
    );
    if (decryptedGuestCartData?.includes(courseId)) {
      // if course is already in guest localStorage
      return toast.error('Course alreay in cart.', { autoClose: 2000 });
    }
    // else add course in guest localStorage
    decryptedGuestCartData.push(courseId);
    setEncryptedGuestCartData(decryptedGuestCartData);
    dispatch({ type: ADD_TO_CART_SUCCESS, courseId: courseId });
    toast.success('Course added to cart.', { autoClose: 2000 });
  };

  const handleRemoveFromCart = (course) => {
    const courseId = course._id;

    if (isLoggedIn) {
      return dispatch(requestRemoveFromCartAction({ userId, courseId }));
    }
    const decryptedGuestCartData = getDecryptedGuestCartData();
    if (decryptedGuestCartData?.includes(courseId)) {
      const updatedGuestCartData = decryptedGuestCartData.filter(
        (guestCartCourse) => guestCartCourse !== courseId.toString()
      );
      setEncryptedGuestCartData(updatedGuestCartData);
    }
    dispatch({ type: REMOVE_FROM_CART_SUCCESS, courseId: courseId });
    toast.success('Course removed from cart.', { autoClose: 2000 });
  };

  return {
    handleAddToCart,
    handleRemoveFromCart,
  };
};
