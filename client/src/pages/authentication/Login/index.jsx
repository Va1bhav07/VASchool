import React, { useEffect } from 'react';
import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import { useFormHook } from '../../../components/Form';
import LoginForm from './LoginForm';
import SigninupLink from '../signinupLink';
import '../authentication.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginAction } from '../../../services/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDecryptedGuestCartData } from '../../../utilities/cartUtilities';
const initialFvalue = {
  email: '',
  password: '',
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authReducer);

  const { formDataState, handleFormChange } = useFormHook(initialFvalue);
  const redirectLocation = location.state?.from;

  useEffect(() => {
    if (authData.isLoggedIn) {
      if (redirectLocation) {
        return navigate(redirectLocation);
      }
      navigate('/', { replace: true });
    }
  }, [authData.isLoggedIn, redirectLocation, navigate]);

  const onFormSubmit = () => {
    const { email, password } = formDataState;
    if (!email || !password) {
      return console.log('enter all values');
    }
    const decryptedCartIteamIds = getDecryptedGuestCartData();
    dispatch(loginAction({ ...formDataState, decryptedCartIteamIds }));
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp
        border={'0'}
        className="shadow mt-5 card-comp p-4 bg-body-tertiary">
        <Card.Title className="text-center fs-2 mb-4">Sign In</Card.Title>
        <LoginForm
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
        <SigninupLink type={'signin'} />
      </CardComp>
    </section>
  );
}

export default Login;
