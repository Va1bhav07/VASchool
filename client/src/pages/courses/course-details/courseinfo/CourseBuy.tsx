import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuTimer } from 'react-icons/lu';
import { useDailyResetTimer } from '../../../../hooks/useDailyResetTimer';

type CourseBuyProps = {
  price: number;
  onAddToCart: () => void;
};

export function CourseBuy({ price, onAddToCart }: CourseBuyProps) {
  const { hours, mins, secs } = useDailyResetTimer();
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={7}
          className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start flex-wrap">
          <p className="h4 fw-bold m-0">${price}</p>
          <p className="m-0">
            + TAX <del>13%</del>
          </p>
          <Badge bg="success">13% OFF</Badge>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex align-items-center gap-1 justify-content-center justify-content-md-start">
          <LuTimer />
          <p className="h-5 m-0">1825 Days validity</p>
        </Col>
      </Row>
      <Row className="mt-2 justify-content-center justify-content-md-start">
        <Col xs="auto">
          <span className="me-2 fs-5">🎉</span>
          <span className="fw-semibold">Special Discount : 13% OFF</span>
        </Col>
      </Row>
      <Row className="mt-2 align-items-center">
        <Col xs="auto">
          <span className="fs-5">🎁</span>
          <span className="fw-semibold mx-2">Coupon :</span>
          <span className="text-success fw-bold me-2">SUMMERSALE</span>
          <span className="fw-semibold">₹2613 OFF</span>
        </Col>
        <Col xs="auto">
          <p className="text-success fw-bold m-0">
            ⏱ {hours}H : {mins}M : {secs}S
          </p>
        </Col>
        <Col xs={12} md={10}>
          <Button
            className="fw-bold mt-3 py-2 w-100 rounded-pill"
            onClick={onAddToCart}>
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
