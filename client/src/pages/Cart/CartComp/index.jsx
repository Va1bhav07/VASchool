import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../cart.css";

const CartComp = ({
  cartData,
  onRemoveFromCart,
  totalPrice,
  handleCheckout,
}) => {
  return (
    <>
      <Row className="mt-4">
        <h2>Cart (Total courses: {cartData.length})</h2>
      </Row>

      {cartData.map((course) => (
        <Row key={course._id} className="course-details-cart-row mt-4">
          <Col md={3} className="mt-4">
            <Image
              src={`${course.thumbnail}`}
              alt={`${course.thumbnail}`}
              className="w-100 course-details-cart-col-img"
            ></Image>
          </Col>

          <Col className="course-details-cart-col mt-4">
            <h5 className="text-center">{course.title}</h5>
            <p className="italic">
              <strong>Description: </strong>
              {course.description}
            </p>
            <Row>
              <Col sm={6}>
                <strong>Author: </strong>
                <p>{course.author}</p>
              </Col>
              <Col sm={6}>
                <strong>Language: </strong>
                <p>{course.language}</p>
              </Col>
              <Col sm={6}>
                <strong>Published on:</strong>
                <p>
                  {new Date(course.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Col>
              <Col>
                <strong>
                  Price:
                  <h5>
                    <strong>${course.price}</strong>
                  </h5>
                </strong>
              </Col>
            </Row>
          </Col>

          <Row>
            <Col className="mt-4 button-remove-col">
              <Button
                variant="outline-danger"
                size="lg"
                onClick={() => onRemoveFromCart(course)}
                className="h-100 w-100 button-remove"
              >
                <strong>Remove</strong>
              </Button>
            </Col>
          </Row>
        </Row>
      ))}
      <Row>
        <Col className="mt-4">
          <Button
            variant="outline-primary"
            as={Link}
            to="/course-listing"
            className="w-100"
          >
            Add more courses
          </Button>
        </Col>
        <Col md={6} className="mt-4">
          <Button variant="success" onClick={()=>handleCheckout(cartData)} className="w-100">
            Continue to Checkout (${totalPrice.toFixed(2)})
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CartComp;
