import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartComp from './CartComp';
import { setCheckoutCoursesAction } from '../../services/actions/checkoutActions';
import { useCart } from '../../hooks/useCart';
import { useCartHandler } from '../../hooks/useCartHandler';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cartData = useSelector((state) => state.cartReducer.cartData);
  const cartData = useCart();
  const { handleRemoveFromCart } = useCartHandler();

  // Calculate total price of all courses in the cart
  const totalPrice = cartData.reduce(
    (total, course) => total + course.price,
    0
  );

  const onRemoveFromCart = (course) => {
    handleRemoveFromCart(course);
  };

  const handleCheckout = (cartData) => {
    dispatch(setCheckoutCoursesAction(cartData));
    navigate('/checkout');
  };

  return (
    <CartComp
      cartData={cartData}
      onRemoveFromCart={onRemoveFromCart}
      totalPrice={totalPrice}
      handleCheckout={handleCheckout}
    />
  );
};

export default Cart;
