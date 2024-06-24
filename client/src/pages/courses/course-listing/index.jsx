import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CourseLisitngCard } from './CourseLisitngCard';

import { useParams } from 'react-router-dom';

// import { CourseFilter } from '../filter-courses';

import { getAllCoursesAction } from '../../../services/actions/courseActions';

function CourseListing() {
  const location = useParams();
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const courseReducer = useSelector(({ courseReducer }) => courseReducer);
  const { allCourses = [], newCoursesAdded = [] } = courseReducer;

  useEffect(() => {
    if (allCourses.length) {
      setCourses([
        ...(newCoursesAdded.length ? newCoursesAdded : []),
        ...allCourses,
      ]);
      return;
    }
    !allCourses?.length && dispatch(getAllCoursesAction());
    // filterData(location);
  }, [location, allCourses.length, allCourses, dispatch, newCoursesAdded]);

  // async function filterData(location) {
  //   const { language, difficulty, courselength } = location;
  //   setCourses(allCourses);
  //   var newArray = '';
  //   if (language != 'All' && language != undefined) {
  //     newArray = courses.filter(function (el) {
  //       return el.language == language;
  //     });
  //   }
  //   if (difficulty != 'All' && difficulty != undefined) {
  //     newArray = courses.filter(function (el) {
  //       return el.level == difficulty;
  //     });
  //   }
  //   if (courselength != 'All' && courselength != undefined) {
  //     if (courselength == 'less than 15 day') {
  //       newArray = courses.filter(function (el) {
  //         return (
  //           Math.ceil(
  //             Math.abs(new Date() - new Date(el.Publish_date)) /
  //               (1000 * 60 * 60 * 24)
  //           ) <= 15
  //         );
  //       });
  //     } else {
  //       newArray = courses.filter(function (el) {
  //         return (
  //           Math.ceil(
  //             Math.abs(new Date() - new Date(el.Publish_date)) /
  //               (1000 * 60 * 60 * 24)
  //           ) <= 30
  //         );
  //       });
  //     }
  //   }
  //   if (newArray != '') setCourses(newArray);
  // }
  console.log('courses :>> ', courses);
  return (
    <Container as="section" className="mt-4">
      <h4 className="text-end">Total : {courses.length} courses</h4>

      <Row className="mt-3 gx-sm-5">
        <Col md={3}>
          <div className="border"></div>
        </Col>
        <Col md={9}>
          {/* <Container> */}
          <Row xs={1} sm={2} md={3} className="gy-4">
            {courses.map(function (course) {
              return (
                // <CourseCard
                //   key={course._id}
                //   course={course}
                //   // border={'0'}
                //   // cardAttibute={{ className: 'bg-body-tertiary shadow' }}
                // />
                <Col key={course._id}>
                  <CourseLisitngCard course={course} />
                </Col>
              );
            })}
          </Row>
          {/* </Container> */}
        </Col>
      </Row>
    </Container>
  );
}

export default CourseListing;
