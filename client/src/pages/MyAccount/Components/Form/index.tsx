import React, { useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

export function useFormHook<T>(initialState: T) {
  const [formDataState, setFormData] = useState<T>(initialState);

  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // debugger;
    const { name, value } = event.target;
    const target = event.target as HTMLInputElement;

    if (target.files) {
      const file = target.files[0];

      if (file) {
        if (file.size / 1024 / 1024 > 20) {
          return toast.error('File size is too big (max 20MB)');
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          setFormData((prevState) => ({
            ...prevState,
            [name]: e.target?.result as string,
          }));
        };
        reader.readAsDataURL(file);
        return;
      }
    }
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
