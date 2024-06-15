import React from 'react';
import { Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { BsTrash } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../checkout.css';

function CheckoutCourses({ checkoutCoursesData, handleDelete }) {
  return (
    <>
      <h4 className="text-center content-body p-2">
        <strong>Order summary</strong>
      </h4>
      {checkoutCoursesData.length === '1' ? (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Row>
                <Col md={2}>
                  <Image
                    alt={`${checkoutCoursesData.thumbnail}`}
                    src={`${checkoutCoursesData.thumbnail}`}
                    height="70px"
                  />
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                  <strong>{`${checkoutCoursesData.title}`}</strong>
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body className="course-details-checkout">
              <Row>
                <p>
                  <strong> Description: </strong>
                  {`${checkoutCoursesData.description}`}
                </p>
              </Row>
              <Row>
                <Col>
                  <p>
                    <strong> Author: </strong> {`${checkoutCoursesData.author}`}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Language: </strong>
                    {`${checkoutCoursesData.language}`}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <strong> Date published: </strong>
                    {new Date(checkoutCoursesData.createdAt).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>
                      <span>Price: </span>
                      <strong>{`${checkoutCoursesData.price}`}</strong>
                    </strong>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(checkoutCoursesData)}>
                    Delete <BsTrash className="ml-1" />
                  </Button>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0">
          {checkoutCoursesData.map((course, index) => (
            <Accordion.Item key={index} eventKey={index} className="mt-4">
              <Accordion.Header>
                <Row>
                  <Col md={2} className="">
                    <Image
                      alt={`${course.thumbnail}`}
                      src={`${course.thumbnail}`}
                      height="70px"
                      className="order-summary-checkout p-1"
                    />
                  </Col>
                  <Col md={{ span: 8, offset: 2 }}>
                    <strong>{course.title}</strong>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="course-details-checkout">
                <Row>
                  <p>
                    <strong> Description: </strong>
                    {`${course.description}`}
                  </p>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>Language: </strong>
                      {`${course.language}`}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong> Author: </strong> {`${course.author}`}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong> Date published: </strong>
                      {new Date(course.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong> Price: </strong>
                      {`${course.price}`}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(course)}>
                      Delete <BsTrash className="ml-1" />
                    </Button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </>
  );
}

export default CheckoutCourses;
