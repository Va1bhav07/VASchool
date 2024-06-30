import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useCartHandler } from '../../hooks/useCartHandler';

function CourseAction({ course }) {
  const { _id, price } = course;
  const navigate = useNavigate();

  const cartReducer = useSelector(({ cartReducer }) => cartReducer);
  const { cartInfo = {} } = cartReducer;

  const { handleAddToCart, handleRemoveFromCart } = useCartHandler();

  const handleDetails = () => {
    navigate('/course-details/' + _id);
  };

  const onAddToCart = (course) => {
    handleAddToCart(course);
  };

  const onRemoveFromCart = (course) => {
    handleRemoveFromCart(course);
  };

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-1 mt-3 mt-md-0 justify-content-center justify-content-md-start">
        <h4 className="mb-1 me-1">${price}</h4>
      </div>
      <div className="d-flex flex-column mt-0 mt-md-4">
        <button
          className="btn btn-success btn-sm"
          type="button"
          onClick={handleDetails}>
          Details
        </button>
        {!cartInfo?.courses?.includes(course._id) ? (
          <button
            onClick={() => onAddToCart(course)}
            className="btn btn-outline-success btn-sm mt-2"
            type="button">
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => onRemoveFromCart(course)}
            className="btn btn-outline-danger btn-sm mt-2"
            type="button">
            Remove from Cart
          </button>
        )}
      </div>
    </>
  );
}

export default CourseAction;
