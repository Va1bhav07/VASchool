import { useEffect, useState } from 'react';
import { NoCourse } from '../PublishedCourses/NoCourse';
import { CourseCard } from '../../Components/CourseCard';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../../../../services/reducers/rootReducer';
import { VStack, StackDivider } from '@chakra-ui/react';
import { fetchStudentCourses } from '../../../../services/actions/courseActions';

import type {
  UserDataProps,
  CourseDetailsProps,
} from '../../../../shared.types';

type MyCoursesProps = {
  userData: UserDataProps;
};

function MyCourse({ userData }: MyCoursesProps) {
  const dispatch = useDispatch();
  const [myCoursesState, setMyCourses] = useState([]);
  const myCoursesIds = userData?.myCoursesIds;

  const courses = useSelector((state: RootState) => state.courseReducer);
  const { allCourses, myCourses } = courses;

  useEffect(() => {
    if (myCoursesIds.length) {
      if (allCourses.length) {
        const isCoursesInAllCourses = allCourses.filter(
          (course: CourseDetailsProps) => myCoursesIds.includes(course._id)
        );
        setMyCourses(isCoursesInAllCourses);
      } else {
        dispatch(fetchStudentCourses(myCoursesIds));
      }
    }
  }, [allCourses, dispatch, myCoursesIds]);

  useEffect(() => {
    if (myCourses.length) {
      setMyCourses(myCourses);
    }
  }, [myCourses]);

  if (!myCoursesIds.length) {
    return <NoCourse />;
  }

  return (
    <VStack divider={<StackDivider />} spacing={4} align="stretch">
      {myCoursesState.map((courseDetails: CourseDetailsProps) => {
        return (
          <CourseCard
            key={courseDetails._id}
            courseDetails={courseDetails}
            myCourse={true}
          />
        );
      })}
    </VStack>
  );
}

export default MyCourse;
