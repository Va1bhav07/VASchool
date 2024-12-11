import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSliders } from 'react-icons/fa6';

import { CourseListingCard } from './CourseListingCard';
import { CourseFilters } from '../courseFilters';
import { getAllCoursesAction } from '../../../services/actions/courseActions';
import { SpinnerComp } from '../../../components/Spinner';
import type {
  CourseDetailsProps,
  AppliedFilterProps,
} from '../../../shared.types';
import type { RootState } from '../../../services/reducers/rootReducer';

/**
 * Type definitions for the course and filter query objects.
 */

type FilterQuery = {
  createdBy?: string;
  level?: string;
  language?: string;
};

/**
 * Filters the list of courses based on the provided filter query.
 * If no filters are applied, returns all courses.
 * @param {CourseDetailsProps[]} courses - List of courses to filter.
 * @param {AppliedFilterProps} filterQuery - Query parameters for filtering.
 * @returns {CourseDetailsProps[]} Filtered list of courses.
 */
const filterCourses = (
  courses: CourseDetailsProps[],
  filterQuery: AppliedFilterProps
): CourseDetailsProps[] => {
  if (Object.keys(filterQuery).length === 0) {
    return courses; // Return all courses if no filters are applied
  }

  const { author, ...restFilterQuery } = filterQuery;
  const newFilterQuery: FilterQuery = { ...restFilterQuery, createdBy: author };
  const filterKeys = Object.keys(newFilterQuery).filter(
    (key) => newFilterQuery[key as keyof FilterQuery]
  );
  console.log('filterKeys', filterKeys);
  const filterdCourse = courses.filter((course) =>
    filterKeys.every(
      (key) =>
        newFilterQuery[key as keyof FilterQuery] ===
        course[key as keyof CourseDetailsProps]
    )
  );
  console.log('filterdCourse', filterdCourse);
  return filterdCourse;
};

/**
 * CourseListing Component
 * Displays a list of courses with filtering options and responsive design.
 */
function CourseListing() {
  const [courses, setCourses] = useState<CourseDetailsProps[]>([]); // Local state for the courses to display
  const [searchParams] = useSearchParams(); // Query parameters for filters
  const filterQuery: AppliedFilterProps = Object.fromEntries([...searchParams]); // Convert query params to an object
  const [showMobileFilter, setShowMobileFilter] = useState(false); // State for mobile filter toggle

  const dispatch = useDispatch();
  const courseReducer = useSelector((state: RootState) => state.courseReducer);
  const { allCourses = [], newCoursesAdded = [], isLoading } = courseReducer;

  // Fetch courses and handle dynamic updates when new courses are added
  useEffect(() => {
    if (allCourses.length) {
      // Combine new courses and existing courses without making another API call
      setCourses([
        ...(newCoursesAdded.length ? newCoursesAdded : []),
        ...allCourses,
      ]);
      return;
    }

    // Initial fetch if no courses are loaded
    if (!allCourses?.length) {
      dispatch(getAllCoursesAction());
    }
  }, [dispatch, allCourses, newCoursesAdded]);

  // Memoize filtered courses to optimize performance
  const filteredCourses = useMemo(
    () => filterCourses(courses, filterQuery),
    [courses, filterQuery]
  );

  // Toggle handler for mobile filter display
  const mobileFilterHandler = () => {
    setShowMobileFilter((prev) => !prev);
  };

  if (isLoading) {
    return <SpinnerComp className="m-auto" />; // Show loading spinner
  }

  return (
    <Container as="section" className="mt-4">
      {/* Mobile filter toggle button */}
      <div
        className="filterButton rounded d-flex align-items-center justify-content-center position-fixed top-50 end-0 z-3 d-block d-lg-none"
        role="button"
        onClick={mobileFilterHandler}>
        <FaSliders />
      </div>

      {/* Total number of filtered courses */}
      <h4 className="text-end">Total: {filteredCourses.length} courses</h4>

      <Row className="mt-3 gx-sm-5">
        {/* Desktop filter component */}
        <Col lg={3} className="p-0 d-none d-lg-block">
          <CourseFilters
            courses={courses}
            mobileFilterHandler={mobileFilterHandler}
            showMobileFilter={showMobileFilter}
          />
        </Col>

        {/* Course listing */}
        <Col xs={12} lg={9}>
          {filteredCourses.length ? (
            <Row xs={1} sm={2} md={3} className="gy-4">
              {filteredCourses.map((course) => (
                <Col key={course._id}>
                  <CourseListingCard course={course} />
                </Col>
              ))}
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
