import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { CourseFilter } from '../filter-courses';
import CourseList from '../courseList';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCoursesAction } from '../../../services/actions/courseActions';

function CourseListing() {
  const location = useParams();
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const courseReducer = useSelector(({ courseReducer }) => courseReducer);
  const { allCourses = [] } = courseReducer;

  useEffect(() => {
    !allCourses?.length && dispatch(getAllCoursesAction());
    filterData(location);
  }, [location, allCourses?.length]);

  async function filterData(location) {
    const { language, difficulty, courselength } = location;
    setCourses(allCourses);
    var newArray = '';
    if (language != 'All' && language != undefined) {
      newArray = courses.filter(function (el) {
        return el.language == language;
      });
    }
    if (difficulty != 'All' && difficulty != undefined) {
      newArray = courses.filter(function (el) {
        return el.level == difficulty;
      });
    }
    if (courselength != 'All' && courselength != undefined) {
      if (courselength == 'less than 15 day') {
        newArray = courses.filter(function (el) {
          return (
            Math.ceil(
              Math.abs(new Date() - new Date(el.Publish_date)) /
                (1000 * 60 * 60 * 24)
            ) <= 15
          );
        });
      } else {
        newArray = courses.filter(function (el) {
          return (
            Math.ceil(
              Math.abs(new Date() - new Date(el.Publish_date)) /
                (1000 * 60 * 60 * 24)
            ) <= 30
          );
        });
      }
    }
    if (newArray != '') setCourses(newArray);
  }

  return (
    <Container fluid>
      <Row className="mt-3" xs={1} md={2}>
        <Col md={3}>
          <CourseFilter />
        </Col>
        <Col md={9}>
          <section>
            <h4>Total : {courses.length} courses</h4>
            {courses.map(function (course) {
              return <CourseList key={course._id} course={course} />;
            })}
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseListing;
