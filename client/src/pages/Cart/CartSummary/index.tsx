import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

type CartSummaryProps = {
  totalPrice: number;
  handleCheckout: () => void; // Function to handle checkout
};

function CartSummary({ totalPrice, handleCheckout }: CartSummaryProps) {
  return (
    <Card className="mb-4 bg-body-tertiary shadow" border="0">
      <Card.Header>
        <h5 className="mb-0">Summary</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 bg-transparent ">
            Products
            <span>${totalPrice}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 bg-transparent">
            Discount
            <span>100%</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3 bg-transparent">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>
                <del>${totalPrice}</del> FREE
              </strong>
            </span>
          </ListGroup.Item>
        </ListGroup>

        <Button className="btn btn-success w-100 fs-5" onClick={handleCheckout}>
          Place Order
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartSummary;
