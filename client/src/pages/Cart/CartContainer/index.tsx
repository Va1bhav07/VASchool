import { Container, Row, Col, Card } from 'react-bootstrap';
import CartItems from '../CartItems';
import CardsAccept from '../CardsAccept';
import CartSummary from '../CartSummary';
import type { CartDataItemsProps } from '../../../shared.types';

type CartContainerProps = {
  cartData: CartDataItemsProps;
  onRemoveFromCart: (id: number) => void; // Function to remove item from cart
  totalPrice: number; // Total price
  handleCheckout: (id: number) => void; // Function to handle checkout
};

function CartContainer({
  cartData,
  totalPrice,
  handleCheckout,
}: CartContainerProps) {
  return (
    <section className="h-100 gradient-custom">
      <Container className="py-2 py-lg-5">
        <Row className="d-flex justify-content-center my-4">
          <Col md={8}>
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Cart - {cartData.length} items</h5>
              </Card.Header>
              <Card.Body>
                <CartItems cartData={cartData} />
              </Card.Body>
            </Card>

            <CardsAccept />
          </Col>

          <Col md={4}>
            <CartSummary
              totalPrice={totalPrice}
              handleCheckout={handleCheckout}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CartContainer;
