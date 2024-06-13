import React, { useEffect } from 'react';
import CheckoutCourses from './CheckoutCourses';
import CheckoutForm from './CheckoutForm';
import { useFormHook } from '../../components/Form';
import { Button, Row, Col } from 'react-bootstrap';
import { apiAxios } from '../../utilities/axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../authentication/authentication.css';
import './checkout.css';
import {
  removeCheckoutCoursesAction,
  setCheckoutCoursesAction,
} from '../../services/actions/checkoutActions';

const initialFvalue = {
  fullName: '',
  email: '',
  cardNumber: '',
  expiry: '',
  cvvNumber: '',
  agreeTerms: false,
};

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formDataState, handleFormChange } = useFormHook(initialFvalue);
  const checkoutCoursesData = useSelector(
    (state) => state.checkoutReducer.checkoutCoursesData
  );
  useEffect(() => {
    dispatch(setCheckoutCoursesAction(checkoutCoursesData));
  }, [checkoutCoursesData]);

  const onFormSubmit = async () => {
    const { fullName, email, cardNumber, expiry, cvvNumber, agreeTerms } =
      formDataState;
    if (
      !fullName ||
      !email ||
      !cardNumber ||
      !expiry ||
      !cvvNumber ||
      !agreeTerms
    ) {
      return console.log('enter all values');
    }

    // Create a new object including formDataState and checkoutCourses
    const formDataWithCourses = {
      ...formDataState,
      checkoutCourses: checkoutCoursesData,
    };

    const response = await apiAxios.post('/checkout', formDataWithCourses);
    response && dispatch(removeCheckoutCoursesAction());
    response && navigate('/');
  };

  const handleDelete = (course) => {
    if (checkoutCoursesData && checkoutCoursesData.length > 0) {
      const updatedCartData = checkoutCoursesData.filter(
        (c) => c._id !== course._id
      );
      dispatch(setCheckoutCoursesAction(updatedCartData));
      // setCheckoutCoursesData(updatedCartData);
      // localStorage.setItem("encryptedCartData", JSON.stringify(updatedCartData));
    }
  };
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      {checkoutCoursesData.length === 0 ? (
        <>
          <Row className="mt-5  content-background">
            <Col className="justify-content-center w-100">
              <h3 className="text-center mt-3 pt-2 pb-2 content-body">
                Checkout Page
              </h3>
              <h4 className="text-center text-danger mt-3 pt-5 pb-5 content-body">
                You do not have any courses to checkout!
              </h4>
            </Col>
          </Row>
          <Row className="">
            <Col sm={12} md={6} className="mt-4">
              <Button
                as={Link}
                to="/"
                variant="outline-primary"
                className="w-100">
                Go to Homepage
              </Button>
            </Col>
            <Col sm={12} md={6} className="mt-4">
              <Button
                as={Link}
                to="/course-listing"
                variant="primary"
                className="w-100">
                Browse all courses
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row className="d-flex justify-content-center align-items-center">
          <Row className="content-background justify-content-center mt-5 p-3">
            {checkoutCoursesData.length === 1 ? (
              <CheckoutCourses
                checkoutCoursesData={checkoutCoursesData}
                handleDelete={handleDelete}
              />
            ) : (
              <CheckoutCourses
                handleDelete={handleDelete}
                checkoutCoursesData={checkoutCoursesData}
              />
            )}
          </Row>
          <Row className="content-background mt-5 text-bol">
            <CheckoutForm
              handleFormChange={handleFormChange}
              onFormSubmit={onFormSubmit}
              handleCancel={handleCancel}
            />
          </Row>
        </Row>
      )}
    </>
  );
}

export default Checkout;
