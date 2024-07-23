import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export function CardSkeleton() {
  return (
    <Card
      border="0"
      className="shadow bg-body-tertiary p-3 pb-0 p-lg-4 pb-lg-0 h-100">
      <Placeholder animation="glow">
        <Placeholder xs={12} className="rounded" style={{ height: '200px' }} />
      </Placeholder>

      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className="py-4">
        <Placeholder as={Card.Title} animation="glow" className="mb-3">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" className="mb-4">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="success" xs={6} />
      </Card.Body>
    </Card>
  );
}
