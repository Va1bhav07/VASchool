import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import CartComp from './CartComp';
import { setCheckoutCoursesAction } from '../../services/actions/checkoutActions';
import { useCart } from '../../hooks/useCart';
import CartContainer from './CartContainer';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cartData = useSelector((state) => state.cartReducer.cartData);
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

  if (!cartData?.length) {
    return <h1>Such Empty</h1>;
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
