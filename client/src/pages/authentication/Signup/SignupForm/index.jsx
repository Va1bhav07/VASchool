import React, { useState } from 'react';
import { FormComp } from '../../../../components/Form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PasswordMeter } from '../../../../components/PasswordMeter';

function SignupForm({ onFormSubmit, handleFormChange }) {
  const [passwordState, setPassword] = useState('');
  return (
    <FormComp onFormSubmit={onFormSubmit} handleFormChange={handleFormChange}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
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
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            name="email"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter password"
            autoComplete="on"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            // minLength={8}
            // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password (e.g., Abcd@123).
          </Form.Control.Feedback>
          <PasswordMeter password={passwordState} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          label="Do you want to join as instructor?"
          feedbackType="invalid"
          name="userType"
          value="instructor"
        />
      </Form.Group>
      <Button className="w-100" type="submit">
        Sign Up
      </Button>
    </FormComp>
  );
}

export default SignupForm;
