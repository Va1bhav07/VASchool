import { useDispatch } from 'react-redux';
import Image from 'react-bootstrap/Image';
import confirmCartPNG from '../../assets/img/confirm-cart.png';
import { Link } from 'react-router-dom';
import { setOderplaceToInit } from '../../services/actions/checkoutActions';

export function OderComplete() {
  const dispatch = useDispatch();

  return (
    <div>
      <Image src={confirmCartPNG} fluid />
      <h3 className="mt-3">
        <strong>Thank you for your order! 🎉</strong>
      </h3>
      <h5 className="my-3">
        {` Dive into your courses and unleash your potential. Learning awaits! 🎓🌟`}
      </h5>
      <h4>
        <strong>Happy learning! 🚀📚</strong>
      </h4>

      <Link
        to="/myaccount"
        className="btn btn-success cart-btn-transform m-3"
        onClick={() => dispatch(setOderplaceToInit())}>
        My Account
      </Link>
    </div>
  );
}
