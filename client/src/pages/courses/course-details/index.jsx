import React, { useState, useEffect, useMemo } from 'react';
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
  const { allCourses, courseDetails } = useSelector(
    ({ courseReducer }) => courseReducer
  );
  const { id } = useParams();

  const [courseDetailsState, setCourseDetails] = useState(courseDetails);

  const { handleAddToCart } = useCartHandler();

  const memoizedCourseDetails = useMemo(() => {
    return allCourses.find((course) => course._id === id);
  }, [allCourses, id]);

  useEffect(() => {
    const getCourseDetails = () => {
      if (memoizedCourseDetails?._id) {
        setCourseDetails(memoizedCourseDetails);
        return true;
      }
      if (courseDetails?._id === id) {
        setCourseDetails(courseDetails);
        return true;
      }
      return false;
    };

    if (!getCourseDetails()) {
      dispatch(fetchCourseByIdAction(id));
    }
  }, [id, memoizedCourseDetails, courseDetails, dispatch]);

  const onAddToCart = (course) => {
    handleAddToCart(course);
  };

  const { thumbnail, title, description, language, price, author } =
    courseDetailsState || {};

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="w-100 mt-2 card-course p-1">
        <Card.Title className="text-center fs-2 mb-4">
          Course Details
        </Card.Title>
        <Row>
          <Col lg="3">
            <Image src={thumbnail} thumbnail />
          </Col>
          <Col lg="9">
            <h3>{title}</h3>
            <p>
              <strong>Details:</strong> {description}
            </p>
            {/* <p>Course level: {courseDetails.level}</p> */}
            <p>Language: {language}</p>
            <p>${price}</p>
            <p>By: {author}</p>
            <Button onClick={() => onAddToCart(courseDetailsState)}>
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
