import React, { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseByIdAction } from '../../../services/actions/courseActions';
// import { useCartHandler } from '../../../hooks/useCartHandler';
import { CourseInfo } from './courseinfo';

function CourseDetails() {
  const dispatch = useDispatch();
  const { allCourses, courseDetails } = useSelector(
    ({ courseReducer }) => courseReducer
  );
  const { id } = useParams();

  const [courseDetailsState, setCourseDetails] = useState(courseDetails);

  // const { handleAddToCart } = useCartHandler();

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

  // const onAddToCart = (course) => {
  //   handleAddToCart(course);
  // };

  // const { thumbnail, title, description, language, price, author } =
  //   courseDetailsState || {};

  return (
    <Container as="section">
      <CourseInfo courseDetails={courseDetailsState} />
    </Container>
  );
}

export default CourseDetails;
