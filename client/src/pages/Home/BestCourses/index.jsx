import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardComp from '../../../components/Cards';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAllCoursesAction } from '../../../services/actions/courseActions';

function BestCourses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bestCoursesState, setBestCourses] = useState([]);

  const courseReducer = useSelector(({ courseReducer }) => courseReducer);
  const { allCourses = [] } = courseReducer;

  const handleDetails = (id) => {
    navigate('/course-details/' + id);
  };

  useEffect(() => {
    if (allCourses.length) {
      setBestCourses([
        // ...(newCoursesAdded.length ? newCoursesAdded : []),
        ...allCourses,
      ]);
      return;
    }
    !allCourses?.length && dispatch(getAllCoursesAction());
    // filterData(location);
  }, [allCourses.length, allCourses, dispatch]);

  return (
    <Container as={'section'} className="text-center my-4">
      <h1 className="fs-1 fw-bold p-3">Our Best Courses</h1>
      <Row xs={1} md={3} className="g-0 g-md-4 g-lg-5 justify-content-center">
        {bestCoursesState.slice(0, 3).map((course, idx) => (
          <Col key={idx} className="mb-3">
            <Card
              // h={100}
              // style={{ width: '25rem' }}
              border="0"
              className="shadow bg-body-tertiary p-3 pb-0 p-lg-4 pb-lg-0 h-100">
              <Card.Img
                variant="top"
                src={course.thumbnail}
                width={200}
                height={200}
                className="scale-effect"
              />
              <Card.Body className="py-4 p-2 d-flex flex-column gap-2 align-items-center">
                <Card.Title as="h4">{course.title}</Card.Title>
                <Card.Text className="lh-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  eius vel maxime quod reprehenderit!
                </Card.Text>
                <Button
                  variant="success"
                  className="py-3 fw-bold"
                  onClick={() => handleDetails(course._id)}
                  style={{ width: 'fit-content' }}>
                  START LEARNING
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestCourses;
