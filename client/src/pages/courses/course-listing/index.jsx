import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSliders } from 'react-icons/fa6';

import { CourseLisitngCard } from './CourseLisitngCard';
import { CourseFilters } from '../courseFilters';
import { getAllCoursesAction } from '../../../services/actions/courseActions';
import { SpinnerComp } from '../../../components/Spinner';

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
  const [showMoblieFilter, setShowMoblieFilter] = useState(false);

  const dispatch = useDispatch();
  const courseReducer = useSelector(({ courseReducer }) => courseReducer);
  const { allCourses = [], newCoursesAdded = [], isLoading } = courseReducer;

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

  const mobileFilterHandler = () => {
    setShowMoblieFilter((pre) => !pre);
  };

  if (isLoading) {
    return <SpinnerComp className="m-auto" />;
  }

  return (
    <Container as="section" className="mt-4">
      <div
        className="filterButton rounded d-flex align-items-center justify-content-center position-fixed top-50 end-0 z-3 d-block d-lg-none"
        role="button"
        onClick={mobileFilterHandler}>
        <FaSliders />
      </div>
      <h4 className="text-end">Total : {filteredCourses.length} courses</h4>

      {/* <Button
        variant="primary"
        onClick={mobileFilterHandler}
        className="position-absolute top-50 start-100">
        Filter
      </Button> */}
      <Row className="mt-3 gx-sm-5">
        <Col lg={3} className="p-0 d-none d-lg-block">
          <CourseFilters
            courses={courses}
            mobileFilterHandler={mobileFilterHandler}
            showMoblieFilter={showMoblieFilter}
          />
        </Col>
        <Col xs={12} lg={9}>
          {filteredCourses?.length ? (
            <Row xs={1} sm={2} md={3} className="gy-4">
              {filteredCourses.map(function (course) {
                return (
                  <Col key={course._id}>
                    <CourseLisitngCard course={course} />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center">
              <h3 className="text-body-secondary">Sorry, No Course Found</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CourseListing;
