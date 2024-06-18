import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../services/actions/authActions';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FaCartShopping } from 'react-icons/fa6';
import Badge from 'react-bootstrap/Badge';

function Navlinks() {
  const dispatch = useDispatch();
  const authReducer = useSelector(({ authReducer }) => authReducer);
  const cartReducer = useSelector(({ cartReducer }) => cartReducer);

  const courses = cartReducer?.cartInfo?.courses;

  // const cartData = useSelector((state) => state.cartReducer.cartData);
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link as={Link} eventKey="courses" to="/course-listing">
          Courses
        </Nav.Link>

        {!authReducer.isLoggedIn ? (
          <>
            <Nav.Link as={Link} eventKey="login" to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} eventKey="signin" to="/signup">
              Sign Up
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} eventKey="checkout" to="/checkout">
              Checkout
            </Nav.Link>
            <Nav.Link as={Link} eventKey="myaccount" to="/myaccount">
              My Account
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
        )}

        <Nav.Link as={Link} eventKey="cart" to={'/cart'}>
          <FaCartShopping size={'23px'} className="me-1" />
          <Badge bg="success">{courses?.length || 0}</Badge>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navlinks;
