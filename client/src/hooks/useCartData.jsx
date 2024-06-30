import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDecryptedGuestCartData } from '../utilities/cartUtilities';
import { setGuestCartDataAction } from '../services/actions/cartActions';

export const useCartData = () => {
  // this will only works for Guest Users
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authReducer);
  const cartData = useSelector((state) => state.cartReducer.cartData);
  const decryptedGuestCartData = getDecryptedGuestCartData() || [];

  useEffect(() => {
    console.log('only work for GUEST user :>> ');
    const getCartData = () => {
      const userLogin = localStorage.getItem('userLogin');
      if (!userLogin) {
        dispatch(setGuestCartDataAction(decryptedGuestCartData));
      }
    };
    !authData.isLoggedIn && getCartData();
  }, [authData.isLoggedIn]);

  return cartData;
};
