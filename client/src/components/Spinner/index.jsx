import Spinner from 'react-bootstrap/Spinner';

export function SpinnerComp(props) {
  return (
    <Spinner animation="border" role="status" {...props}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
