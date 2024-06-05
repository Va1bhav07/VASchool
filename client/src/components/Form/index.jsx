import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function useFormHook(initialState) {
  const [formDataState, setFormData] = useState(initialState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    name &&
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };

  return {
    formDataState,
    setFormData,
    handleFormChange,
  };
}

export function FormComp({
  handleFormChange,
  onFormSubmit,
  children,
  ...props
}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    onFormSubmit();
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      {...props}
    >
      {children}
    </Form>
  );
}
