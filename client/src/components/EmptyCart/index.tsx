import Image from 'react-bootstrap/Image';
import emptyCartPNG from '../../assets/img/emptyCart.png';
import { Link } from 'react-router-dom';

export function EmptyCart() {
  return (
    <div>
      <Image src={emptyCartPNG} fluid />
      <h3>
        <strong>Your Cart is Empty</strong>
      </h3>
      <h5>Looks like you haven't selected a course yet.</h5>
      <Link
        to="/course-listing"
        className="btn btn-success cart-btn-transform m-3">
        continue shopping
      </Link>
    </div>
  );
}
