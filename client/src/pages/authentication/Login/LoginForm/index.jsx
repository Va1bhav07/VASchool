import React from 'react';
import { FormComp } from '../../../../components/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function LoginForm({ handleFormChange, onFormSubmit }) {
  return (
    <FormComp onFormSubmit={onFormSubmit} handleFormChange={handleFormChange}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
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

      <Row className="mb-4">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter password"
            autoComplete="on"
            name="password"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button className="w-100" type="submit">
        Submit form
      </Button>
    </FormComp>
  );
}

export default LoginForm;
