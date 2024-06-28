import React, { useEffect, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';

import { FormComp } from '../../../components/Form';
import { useFormHook } from '../../../components/Form';
import { SelectComp } from '../../../components/FormElements/SelectComp';
import type { filterUIProps } from '../../../shared.types';

type FilterFormProps = {
  filterState: filterUIProps;
};

const initalFilterState = {
  author: '',
  level: '',
  language: '',
};

export function FilterForm({ filterState }: FilterFormProps) {
  const { formDataState, handleFormChange, setFormData } =
    useFormHook(initalFilterState);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (Object.keys(filterQuery).length) {
      setFormData(filterQuery);
    }
    // need to test this more
  }, [JSON.stringify(filterQuery)]);

  const getFormType = useCallback(
    (
      type: string,
      title: string,
      selectedValue: string,
      data: { id: string | number; name: string }[]
    ) => {
      switch (type) {
        case 'select':
          return (
            <SelectComp
              data={data}
              name={title}
              selectedValue={selectedValue}
            />
          );

        default:
          return <></>;
      }
    },
    []
  );

  const onFormSubmit = () => {
    const isEmpty = Object.values(formDataState).every((e) => e === '');
    if (isEmpty) {
      return;
    }
    setSearchParams(formDataState);
  };

  return (
    <FormComp onFormSubmit={onFormSubmit} handleFormChange={handleFormChange}>
      {Object.keys(filterState).map((filterDataKey) => {
        const typedKey = filterDataKey as keyof filterUIProps;
        const filterStateValue = filterState[typedKey];
        // console.log('filterStateValue :>> ', filterStateValue);
        return (
          <React.Fragment key={filterStateValue.title}>
            <Form.Group className="pb-2">
              <Form.Label>{filterStateValue.title}</Form.Label>
              {getFormType(
                filterStateValue.comp,
                filterStateValue.title.toLowerCase(),
                formDataState[filterDataKey],
                filterStateValue.data
              )}
            </Form.Group>
            <hr />
          </React.Fragment>
        );
      })}
      <Button type="submit">Submit form</Button>
    </FormComp>
  );
}
