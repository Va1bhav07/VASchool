import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { placeOderRequestAction } from '../../services/actions/checkoutActions';
import { useCart } from '../../hooks/useCart';
import CartContainer from './CartContainer';
import { EmptyCart } from '../../components/EmptyCart';
import { OderComplete } from '../../components/OrderComplete';
import Container from 'react-bootstrap/Container';
import { SpinnerComp } from '../../components/Spinner';
import type { CartDataItemProps } from '../../shared.types';
import type { RootState } from '../../services/reducers/rootReducer';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, cartInfo } = useSelector(
    ({ cartReducer }: RootState) => cartReducer
  );
  const courseIds = cartInfo?.courses;
  const { isLoggedIn, userData } = useSelector(
    ({ authReducer }: RootState) => authReducer
  );
  const { isOderPlaced } = useSelector(
    ({ checkoutReducer }: RootState) => checkoutReducer
  );

  const cartData = useCart();

  // Calculate total price of all courses in the cart
  const totalPrice = cartData.reduce(
    (total: number, course: CartDataItemProps) => total + course.price,
    0
  );

  const handleCheckout = () => {
    if (!isLoggedIn) {
      return navigate('/login', { state: { from: location } });
    }
    dispatch(placeOderRequestAction({ courseIds, userId: userData?._id }));
  };

  if (isLoading) {
    return <SpinnerComp className="m-auto" />;
  }

  if (isOderPlaced) {
    return (
      <Container className="text-center m-auto">
        <OderComplete />
      </Container>
    );
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
