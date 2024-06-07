import Card from "react-bootstrap/Card";

function CardComp({ children, header, footer, imgSrc, ...props }) {
  return (
    <Card {...props}>
      {header && <Card.Header>{header}</Card.Header>}
      {imgSrc && <Card.Img variant="top" src={imgSrc} />}
      <Card.Body>{children}</Card.Body>
      {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
    </Card>
  );
}

export default CardComp;
