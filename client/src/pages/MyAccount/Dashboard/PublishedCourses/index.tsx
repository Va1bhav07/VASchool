import React, { useEffect } from 'react';
import NoCourse from './NoCourse';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseAction } from '../../../../services/actions/courseActions';
import { CourseCard } from './CourseCard';
import type {
  UserDataProps,
  CourseDetailsProps,
} from '../../../../shared.types';
import type { RootState } from '../../../../services/reducers/rootReducer';
import { Flex } from '@chakra-ui/react';

type PublishedCoursesProps = {
  userData: UserDataProps;
  tabIndexState: number;
};

function PublishedCourses({ userData, tabIndexState }: PublishedCoursesProps) {
  const { _id } = userData;
  const dispatch = useDispatch();

  const courses = useSelector((state: RootState) => state.courseReducer);
  const { instructorCourses = [] } = courses;

  useEffect(() => {
    if (tabIndexState === 1) {
      dispatch(fetchCourseAction(_id));
    }
  }, [tabIndexState, _id, dispatch]);

  return (
    <Flex direction={'column'} gap={3} borderWidth={0}>
      {instructorCourses.length ? (
        instructorCourses.map((course: CourseDetailsProps) => (
          <CourseCard key={course._id} course={course} />
        ))
      ) : (
        <NoCourse />
      )}
    </Flex>
  );
}

export default PublishedCourses;
