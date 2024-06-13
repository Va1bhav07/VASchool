import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCartDataAction } from '../services/actions/cartActions';

export const useCart = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector(({ authReducer }) => authReducer);
  const cartReducer = useSelector(({ cartReducer }) => cartReducer);

  const cartData = cartReducer?.cartData;
  const courses = cartReducer?.cartInfo?.courses;

  useEffect(() => {
    courses?.length &&
      !(courses.length === cartData.length) &&
      dispatch(getCartDataAction(courses));
  }, [authReducer.isLoggedIn, JSON.stringify(courses)]);

  return cartData;
};
