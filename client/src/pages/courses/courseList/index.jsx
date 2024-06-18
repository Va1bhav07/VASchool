import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComp from '../../../components/Cards';
import CourseAction from './CourseActions';
import CourseInfo from './CourseInfo';
import Image from 'react-bootstrap/Image';

// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:4000/"
//     : "https://edu-flex-backend.onrender.com/";

function CourseList({ course }) {
  const { thumbnail } = course;
  return (
    <section>
      <Container>
        <Row className="justify-content-center mb-3">
          <Col md={12}>
            <CardComp className="shadow-0 border rounded-3">
              <Row>
                <Col md={12} lg={3} className="mb-4 mb-lg-0">
                  <div className="rounded">
                    <Image src={`${thumbnail}`} thumbnail />
                  </div>
                </Col>
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-evenly">
                  <CourseInfo course={course} />
                </Col>
                <Col
                  md={6}
                  lg={3}
                  className="d-flex flex-column justify-content-between border-sm-start-none border-start">
                  <CourseAction course={course} />
                </Col>
              </Row>
            </CardComp>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CourseList;
