import React from "react";
import { FormComp } from "../../../components/Form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../checkout.css";

function CheckoutForm({ onFormSubmit, handleFormChange, handleCancel }) {
  return (
    <FormComp
      onFormSubmit={onFormSubmit}
      handleFormChange={handleFormChange}
      className="mt-4 rder-summary-checkout"
    >
      <Row>
        <h4 className="text-center content-body p-2">Checkout</h4>
      </Row>
      <Row className="content-body mt-3 mb-5">
            <Form.Group as={Col} md={6} className="mt-3" controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter full name"
                name="fullName"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter full name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={6} className="mt-3" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="someone@example.com"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md={12} className="mt-3" controlId="validationCustom03">
              <Form.Label>Credit/Debit Card Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="16-digit card number"
                name="cardNumber"
                pattern="[0-9]{16}"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Card Number.
              </Form.Control.Feedback>
            </Form.Group>
              <Form.Group as={Col} md={6} className="mt-3" controlId="validationCustom04">
                <Form.Label>Valid Thru</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="MMYY"
                  name="expiry"
                  pattern="[0-9]{4}"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Expiry Date.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} className="mt-3" controlId="validationCustom05">
                <Form.Label>CVV Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="3-digit CVV number on back"
                  name="cvvNumber"
                  pattern="[0-9]{3}"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter CVV Number.
                </Form.Control.Feedback>
              </Form.Group>
            <Form.Group as={Col} md={12} className="mt-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                name="agreeTerms"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
          <Row className="mb-3">
          <Col>
              <Button
                variant="outline-danger"
                className="w-100 mt-2 checkout-buttons-width"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Button
              variant="success"
                className=" w-100 mt-2 button-primary checkout-buttons-width"
                type="submit"
              >
                Complete Enrollment
              </Button>
            </Col>
          </Row>
      </Row>
    </FormComp>
  );
}

export default CheckoutForm;
