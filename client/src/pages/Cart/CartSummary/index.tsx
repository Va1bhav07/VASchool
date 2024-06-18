import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

type CartSummaryProps = {
  totalPrice: number;
  handleCheckout: (id: number) => void; // Function to handle checkout
};

function CartSummary({ totalPrice, handleCheckout }: CartSummaryProps) {
  return (
    <Card className="mb-4">
      <Card.Header>
        <h5 className="mb-0">Summary</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 ">
            Products
            <span>${totalPrice}</span>
          </ListGroup.Item>
          {/* <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Gratis</span>
          </ListGroup.Item> */}
          <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>${totalPrice}</strong>
            </span>
          </ListGroup.Item>
        </ListGroup>

        <Button
          className="btn btn-success w-100 fs-5"
          onClick={() => handleCheckout(1)}>
          Go to checkout
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartSummary;
