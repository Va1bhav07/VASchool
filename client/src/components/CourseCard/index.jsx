import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComp from '../Cards';
import CardAction from './CardAction';
import CardBody from './CardBody';
import Image from 'react-bootstrap/Image';

export function CourseCard({ course, border = '1', cardAttibute = {} }) {
  const { thumbnail } = course;
  return (
    <Row className="justify-content-center mb-3">
      <Col md={12}>
        <CardComp border={border} {...cardAttibute}>
          <Row>
            <Col md={12} lg={3} className="mb-4 mb-lg-0">
              <Image src={`${thumbnail}`} thumbnail className="border-0" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-evenly">
              <CardBody course={course} />
            </Col>
            <Col
              md={6}
              lg={3}
              className="d-flex flex-column justify-content-between border-sm-start-none border-start">
              <CardAction course={course} />
            </Col>
          </Row>
        </CardComp>
      </Col>
    </Row>
  );
}
