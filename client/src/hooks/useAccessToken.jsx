import { useDispatch, useSelector } from 'react-redux';
import { tokenAction } from '../services/actions/authActions';
import { useEffect } from 'react';

export const useAccessToken = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authReducer);
  console.log('authData :>> ', authData);

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin) {
      !authData.isLoggedIn && dispatch(tokenAction());
    }
  }, [authData.isLoggedIn, dispatch]);

  return authData;
};
