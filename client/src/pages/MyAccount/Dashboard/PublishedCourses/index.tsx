import { useState, useEffect } from 'react';
import { NoCourse } from './NoCourse';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCourseAction,
  deleteCourseByIdAction,
} from '../../../../services/actions/courseActions';
import { CourseCard } from '../../Components/CourseCard';
import type {
  UserDataProps,
  CourseDetailsProps,
} from '../../../../shared.types';
import type { RootState } from '../../../../services/reducers/rootReducer';
import {
  VStack,
  StackDivider,
  Spinner,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { AlertDialogComp } from '../../Components/AlertDialog';

type PublishedCoursesProps = {
  userData: UserDataProps;
  // tabIndexState: number;
  // courseDetailsState:CourseDetailsProps[]
};

function PublishedCourses({ userData }: PublishedCoursesProps) {
  const { _id } = userData;
  const dispatch = useDispatch();
  const [publishedCoursesState, setPublishedCourses] = useState<
    CourseDetailsProps[]
  >([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [courseIdDelState, setCourseIdDel] = useState<string>('');

  const courses = useSelector((state: RootState) => state.courseReducer);
  const { instructorCourses = [], newCoursesAdded = [], isLoading } = courses;

  useEffect(() => {
    if (instructorCourses.length) {
      setPublishedCourses([
        ...(newCoursesAdded.length ? newCoursesAdded : []),
        ...instructorCourses,
      ]);
    } else {
      dispatch(fetchCourseAction(_id));
      setPublishedCourses([]);
    }
  }, [dispatch, _id, instructorCourses, newCoursesAdded]);

  const onCourseDelete = (id: string) => {
    onOpen();
    setCourseIdDel(id);
  };

  const confirmDeleteHandler = () => {
    dispatch(deleteCourseByIdAction(courseIdDelState));
    setCourseIdDel('');
    onClose();
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

  if (!publishedCoursesState.length) {
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
      {publishedCoursesState.map((courseDetails: CourseDetailsProps) => {
        return (
          <CourseCard
            key={courseDetails._id}
            courseDetails={courseDetails}
            onCourseDelete={onCourseDelete}
          />
        );
      })}

      <AlertDialogComp
        isOpen={isOpen}
        onClose={onClose}
        confirmDeleteHandler={confirmDeleteHandler}
        alertMsg="You want to permanently delete this course?"
      />
    </VStack>
  );
}

export default PublishedCourses;
