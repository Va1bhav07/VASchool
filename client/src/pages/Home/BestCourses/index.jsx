import React from 'react';
import Container from 'react-bootstrap/Container';
import CardComp from '../../../components/Cards';
import Edu from '../../../assets/img/EduFlex.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const demoData = [
  {
    img: Edu,
    title: 'Card Title',
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.`,
  },
  {
    img: Edu,
    title: 'Card Title',
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          `,
  },
  {
    img: Edu,
    title: 'Card Title',
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.`,
  },
];

function BestCourses() {
  return (
    <Container as={'section'} className="text-center my-4">
      <h1 className="fs-1 fw-bold p-3">Our Best Courses</h1>
      <Row xs={1} md={3} className="g-0 g-md-4 g-lg-5">
        {demoData.map((data, idx) => (
          <Col key={idx} className="mb-3">
            <CardComp
              // h={100}
              // style={{ width: '25rem' }}
              border="0"
              className="shadow bg-body-tertiary  h-100"
              imgSrc={
                <Card.Img
                  variant="top"
                  src={data.img}
                  width={350}
                  height={350}
                />
              }
              footer={
                <Button variant="success" className="p-2 my-4">
                  START LEARNING
                </Button>
              }>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
            </CardComp>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestCourses;
