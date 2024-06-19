import React, { useState, ReactNode } from 'react';

export function useFormHook<T>(initialState: T) {
  const [formDataState, setFormData] = useState<T>(initialState);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
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

type FormCompProps = {
  // handleFormChange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onFormSubmit: (isValid: boolean) => void;
  children: ReactNode;
  [key: string]: unknown;
};

export function FormComp({
  // handleFormChange,
  onFormSubmit,
  children,
  ...props
}: FormCompProps): JSX.Element {
  //   const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    onFormSubmit(isValid);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      // onChange={handleFormChange}
      {...props}>
      {children}
    </form>
  );
}
