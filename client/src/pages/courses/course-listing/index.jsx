import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CourseLisitngCard } from './CourseLisitngCard';

import { useSearchParams } from 'react-router-dom';

import { CourseFilters } from '../courseFilters';

import { getAllCoursesAction } from '../../../services/actions/courseActions';

const filterCourses = (courses, filterQuery) => {
  if (Object.keys(filterQuery).length === 0) {
    return courses; // Return all courses if no filters are applied
  }

  const { author, ...restFilterQuery } = filterQuery;
  const newFilterQuery = { ...restFilterQuery, createdBy: author };
  const filterKeys = Object.keys(newFilterQuery).filter(
    (key) => newFilterQuery[key]
  );

  return courses.filter((course) =>
    filterKeys.every((key) => newFilterQuery[key] === course[key])
  );
};

function CourseListing() {
  const [courses, setCourses] = useState([]);
  const [searchParams] = useSearchParams();
  const filterQuery = Object.fromEntries([...searchParams]);

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
  }, [dispatch, allCourses, newCoursesAdded]);

  const filteredCourses = useMemo(
    () => filterCourses(courses, filterQuery),
    [courses, filterQuery]
  );

  return (
    <Container as="section" className="mt-4">
      <h4 className="text-end">Total : {filteredCourses.length} courses</h4>

      <Row className="mt-3 gx-sm-5">
        <Col md={3} className="p-0">
          <CourseFilters courses={courses} />
        </Col>
        <Col md={9}>
          {/* <Container> */}
          <Row xs={1} sm={2} md={3} className="gy-4">
            {filteredCourses.map(function (course) {
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
