import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import CartComp from './CartComp';
import { setCheckoutCoursesAction } from '../../services/actions/checkoutActions';
import { useCart } from '../../hooks/useCart';
import CartContainer from './CartContainer';
import { EmptyCart } from '../../components/EmptyCart';
import Container from 'react-bootstrap/Container';
import { SpinnerComp } from '../../components/Spinner';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(({ cartReducer }) => cartReducer);
  const cartData = useCart();

  // Calculate total price of all courses in the cart
  const totalPrice = cartData.reduce(
    (total, course) => total + course.price,
    0
  );

  const handleCheckout = (cartData) => {
    dispatch(setCheckoutCoursesAction(cartData));
    navigate('/checkout');
  };

  if (isLoading) {
    return <SpinnerComp className="m-auto" />;
  }

  if (!cartData?.length) {
    return (
      <Container className="text-center m-auto">
        <EmptyCart />
      </Container>
    );
  }

  return (
    <CartContainer
      cartData={cartData}
      totalPrice={totalPrice}
      handleCheckout={handleCheckout}
    />
  );
};

export default Cart;
