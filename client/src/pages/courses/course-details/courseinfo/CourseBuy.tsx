import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuTimer } from 'react-icons/lu';
import { useDailyResetTimer } from '../../../../hooks/useDailyResetTimer';

type CourseBuyProps = {
  price: number;
};

export function CourseBuy({ price }: CourseBuyProps) {
  const { hours, mins, secs } = useDailyResetTimer();
  return (
    <Container>
      <Row className="">
        <Col className="d-flex align-items-center gap-2">
          <p className="h4 fw-bold m-0">${price}</p>
          <p className="m-0">
            + TAX <del>13%</del>
          </p>
          <Badge bg="success">13% OFF</Badge>
        </Col>
        <Col className="d-flex align-items-center gap-1">
          <LuTimer />
          <p className="h-5 m-0">1825 Days validity</p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <span className="me-2 fs-5">🎉</span>
          <span className="fw-semibold">Special Discount : 13% OFF</span>
        </Col>
        {/* <Col></Col> */}
      </Row>
      <Row className="mt-2 align-items-center">
        <Col xs="auto">
          <span className="fs-5">🎁</span>
          <span className="fw-semibold mx-2">Coupon :</span>
          <span className="text-success fw-bold me-2">SUMMERSALE</span>
          <span className="fw-semibold">₹2613 OFF</span>
        </Col>
        <Col>
          <p className="text-success fw-bold m-0">
            ⏱ {hours}H : {mins}M : {secs}S
          </p>
        </Col>
      </Row>
      <Button className="fw-bold mt-3 py-2 w-75 rounded-pill ">
        ENROLL TODAY
      </Button>
    </Container>
  );
}
