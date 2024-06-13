import React, { useEffect } from 'react';
import NoCourse from './NoCourse';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseAction } from '../../../../services/actions/courseActions';
import CourseCard from '../../../../components/CourseCard';

function PublishedCourses({ userData = {}, tabIndexState }) {
  const { _id } = userData;
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer);
  const { instructorCourses = [] } = courses;

  console.log('courses :>> ', courses);

  useEffect(() => {
    tabIndexState === 2 && dispatch(fetchCourseAction(_id));
  }, [tabIndexState, _id, dispatch]);

  return (
    <>
      {instructorCourses?.length ? (
        instructorCourses.map((course) => (
          <CourseCard key={course._id} course={course} action={false} />
        ))
      ) : (
        <NoCourse />
      )}
    </>
  );
}

export default PublishedCourses;
