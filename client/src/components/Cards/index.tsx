import Card from 'react-bootstrap/Card';

type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  imgSrc?: React.ReactNode;
  className?: string;
  [key: string]: unknown; // Allow any other props
};

function CardComp({
  children,
  header,
  footer,
  imgSrc,
  ...props
}: CardProps): JSX.Element {
  return (
    <Card {...props}>
      {header && <Card.Header>{header}</Card.Header>}
      {imgSrc && imgSrc}
      <Card.Body>{children}</Card.Body>
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  );
}

export default CardComp;
