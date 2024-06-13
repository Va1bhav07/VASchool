import React, { useState, useEffect } from 'react';
import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseByIdAction } from '../../../services/actions/courseActions';
import { useCartHandler } from '../../../hooks/useCartHandler';

function CourseDetails() {
  const dispatch = useDispatch();
  const { allCourses, courseData } = useSelector(
    (state) => state.courseReducer
  );
  const { id } = useParams();

  const [courseDetails, setCourseDetails] = useState({
    image: '',
    name: '',
    description: '',
  });

  const { handleAddToCart } = useCartHandler();

  useEffect(() => {
    console.log('location :>> ', id);
    !getCourseDetails() && dispatch(fetchCourseByIdAction(id));
  }, [id, courseData?._id]);

  const getCourseDetails = () => {
    let course = allCourses.find((course) => course._id === id);
    if (course?._id) {
      setCourseDetails(course);
      return true;
    }
    if (courseData?._id === `${id}`) {
      setCourseDetails(courseData);
      return true;
    }
    return false;
  };
  const onAddToCart = (course) => {
    handleAddToCart(course);
  };
  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="w-100 mt-2 card-course p-1">
        <Card.Title className="text-center fs-2 mb-4">
          Course Details
        </Card.Title>
        <Row>
          <Col lg="3">
            <Image src={courseDetails.thumbnail} thumbnail />
          </Col>
          <Col lg="9">
            <h3>{courseDetails.title} </h3>
            <p>
              <strong>Details:</strong> {courseDetails.description}
            </p>
            {/* <p>Course level: {courseDetails.level}</p> */}
            <p>language: {courseDetails.language}</p>
            <p>${courseDetails.price}</p>
            <p>By: {courseDetails.author}</p>
            <Button onClick={() => onAddToCart(courseDetails)}>
              Add to cart
            </Button>
            <Button
              variant="outline-primary"
              as={Link}
              to={'/course-listing'}
              className="m-2">
              Back to all courses
            </Button>
          </Col>
        </Row>
      </CardComp>
    </section>
  );
}

export default CourseDetails;
