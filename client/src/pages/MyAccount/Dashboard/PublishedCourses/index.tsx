import { useState, useEffect } from 'react';
import NoCourse from './NoCourse';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCourseAction,
  deleteCourseByIdAction,
} from '../../../../services/actions/courseActions';
import { CourseCard } from './CourseCard';
import type {
  UserDataProps,
  CourseDetailsProps,
} from '../../../../shared.types';
import type { RootState } from '../../../../services/reducers/rootReducer';
import { VStack, StackDivider, Spinner, Box } from '@chakra-ui/react';

type PublishedCoursesProps = {
  userData: UserDataProps;
  // tabIndexState: number;
  // courseDetailsState:CourseDetailsProps[]
};

function PublishedCourses({ userData }: PublishedCoursesProps) {
  const { _id } = userData;
  const dispatch = useDispatch();
  const [courseDetailsState, setCourseDetails] = useState<CourseDetailsProps[]>(
    []
  );

  const courses = useSelector((state: RootState) => state.courseReducer);
  const { instructorCourses = [], newCoursesAdded = [], isLoading } = courses;

  useEffect(() => {
    if (instructorCourses.length) {
      setCourseDetails([
        ...(newCoursesAdded.length ? newCoursesAdded : []),
        ...instructorCourses,
      ]);
    } else {
      dispatch(fetchCourseAction(_id));
    }
  }, [dispatch, _id, instructorCourses, newCoursesAdded]);

  const onCourseDelete = (id: string) => {
    dispatch(deleteCourseByIdAction(id));
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50vh">
        <Spinner />
      </Box>
    );
  }

  if (!courseDetailsState.length) {
    return <NoCourse />;
  }

  return (
    <VStack
      // direction="column"
      divider={<StackDivider />}
      spacing={4}
      align="stretch"
      // gap={3}
      // borderWidth={0}
    >
      {courseDetailsState.map((courseDetails: CourseDetailsProps) => {
        return (
          <CourseCard
            key={courseDetails._id}
            courseDetails={courseDetails}
            onCourseDelete={onCourseDelete}
          />
        );
      })}
    </VStack>
  );
}

export default PublishedCourses;
