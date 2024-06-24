import Card from 'react-bootstrap/Card';
function CardsAccept() {
  return (
    <Card className="mb-4 mb-lg-0 bg-body-tertiary" border="0">
      <Card.Body>
        <p>
          <strong>We accept</strong>
        </p>
        <img
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"
        />
        <img
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express"
        />
        <img
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard"
        />
        {/* <img
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
          alt="PayPal acceptance mark"
        /> */}
      </Card.Body>
    </Card>
  );
}

export default CardsAccept;
