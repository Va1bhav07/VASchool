import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComp from '../Cards';
import CardAction from './CardAction';
import CardBody from './CardBody';
import Image from 'react-bootstrap/Image';

// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:4000/"
//     : "https://edu-flex-backend.onrender.com/";

function CourseList({ course, action = true }) {
  const { thumbnail } = course;
  return (
    <section>
      <div>
        <Row className="justify-content-center mb-3">
          <Col md={12}>
            <CardComp className="shadow-0 border rounded-3">
              <Row>
                <Col md={12} lg={3} className="mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <Image src={`${thumbnail}`} thumbnail />

                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: `rgba(253, 253, 253, 0.15)`,
                          }}></div>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-evenly">
                  <CardBody course={course} />
                </Col>
                <Col
                  md={6}
                  lg={3}
                  className="d-flex flex-column justify-content-between border-sm-start-none border-start">
                  <CardAction course={course} action={action} />
                </Col>
              </Row>
            </CardComp>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CourseList;
