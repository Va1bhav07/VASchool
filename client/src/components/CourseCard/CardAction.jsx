import React from "react";
import { useNavigate } from "react-router-dom";

function CourseAction({ course, action }) {
  const { id, price } = course;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/course-details/" + id);
  };

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-1">
        <h4 className="mb-1 me-1">${price}</h4>
        {/* <span className="text-danger">
          <s>$20.99</s>
        </span> */}
      </div>
      {/* <h6 className="text-success">Free shipping</h6> */}
      {action ? (
        <div className="d-flex flex-column mt-4">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={handleDetails}
          >
            Details
          </button>
          <button className="btn btn-outline-primary btn-sm mt-2" type="button">
            Add to cart
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CourseAction;
