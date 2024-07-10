import React, { useEffect } from 'react';
import SignupForm from './SignupForm';
import CardComp from '../../../components/Cards';
import { useFormHook } from '../../../components/Form';
import SigninupLink from '../signinupLink';
import Card from 'react-bootstrap/Card';
import '../authentication.css';
import { useNavigate } from 'react-router-dom';
import { signInAction } from '../../../services/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDecryptedGuestCartData } from '../../../utilities/cartUtilities';

const initialFvalue = {
  fullName: '',
  email: '',
  password: '',
};

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authReducer = useSelector(({ authReducer }) => authReducer);

  const { formDataState, handleFormChange } = useFormHook(initialFvalue);

  useEffect(() => {
    if (authReducer.isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [authReducer.isLoggedIn, navigate]);

  const onFormSubmit = async () => {
    const { fullName, email, password } = formDataState;
    if (!email || !password || !fullName) {
      return console.log('enter all values');
    }
    const decryptedCartIteamIds = getDecryptedGuestCartData();
    dispatch(signInAction({ ...formDataState, decryptedCartIteamIds }));
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp
        border={'0'}
        className="shadow mt-5 card-comp p-1 p-sm-4 bg-body-tertiary">
        <Card.Title className="text-center fs-2 mb-4">Sign Up</Card.Title>
        <SignupForm
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
        <SigninupLink type={'signup'} />
      </CardComp>
    </section>
  );
}

export default Signup;
