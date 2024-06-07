import React from "react";
import Container from "react-bootstrap/Container";
import CardComp from "../../../components/Cards";
import Edu from "../../../assets/img/EduFlex.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const demoData = [
  {
    img: Edu,
    title: "Card Title",
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.`,
  },
  {
    img: Edu,
    title: "Card Title",
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.`,
  },
  {
    img: Edu,
    title: "Card Title",
    text: `  Some quick example text to build on the card title and make up the
          bulk of the card's content.`,
  },
];

function BestCourses() {
  return (
    <Container as={"section"} className="text-center my-3 my-lg-5">
      <h1 className="fs-1 fw-bold pb-2">Our Best Courses</h1>
      <Row xs={1} md={3} className="g-5">
        {demoData.map((data, idx) => (
          <Col key={idx}>
            <CardComp
              border="0"
              className="mt-0 bg-body-tertiary"
              imgSrc={data.img}
            >
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
              <Button variant="success">Go somewhere</Button>
            </CardComp>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestCourses;
