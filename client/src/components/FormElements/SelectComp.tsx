import Form from 'react-bootstrap/Form';

type SelectCompProps = {
  selectedValue: string;
  data: { id: string | number; name: string }[];
  [key: string]: unknown;
};

export function SelectComp({ selectedValue, data, ...props }: SelectCompProps) {
  return (
    <Form.Select {...props} value={selectedValue} onChange={() => {}}>
      <option value="">Select</option>
      {data.map((value) => (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      ))}
    </Form.Select>
  );
}
