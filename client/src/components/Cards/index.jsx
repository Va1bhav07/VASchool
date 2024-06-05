import Card from "react-bootstrap/Card";

function CardComp({ children, header, footer, ...props }) {
  return (
    <Card {...props}>
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body>{children}</Card.Body>
      {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
    </Card>
  );
}

export default CardComp;
