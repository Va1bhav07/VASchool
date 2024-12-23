import {
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAIL,
  // INSTRUCTOR_COURSES_REQUEST,
  INSTRUCTOR_COURSES_SUCCESS,
  INSTRUCTOR_COURSES_FAIL,
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,
  ALL_COURSES_FAIL,
  // COURSE_BY_ID_REQUEST,
  COURSE_BY_ID_SUCCESS,
  COURSE_BY_ID_FAIL,
  DELETE_COURSE_BY_ID_SUCCESS,
  DELETE_COURSE_BY_ID_FAIL,
  STUDENT_COURSES_SUCCESS,
  STUDENT_COURSES_FAIL,
  USER_LOGOUT_SUCCESS,
} from '../constants';

const initialState = {
  allCourses: [],
  myCourses: [],
  instructorCourses: [],
  courseDetails: {},
  newCoursesAdded: [],
  isLoading: true,
  message: '',
};

export const courseReducer = (
  state = initialState,
  {
    type,
    courseDetails,
    message,
    instructorCourses,
    allCourses,
    newCourse,
    courseId,
    myCourses,
  }
) => {
  switch (type) {
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        newCoursesAdded: [...state.newCoursesAdded, newCourse],
        isLoading: false,
        message,
      };
    case ADD_COURSE_FAIL:
      return {
        ...state,
        message: '',
        isLoading: false,
      };

    case ADD_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case INSTRUCTOR_COURSES_SUCCESS:
      return {
        ...state,
        instructorCourses,
        newCoursesAdded: [],
        isLoading: false,
      };

    // case INSTRUCTOR_COURSES_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    case INSTRUCTOR_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case ALL_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ALL_COURSES_SUCCESS:
      return {
        ...state,
        allCourses,
        newCoursesAdded: [],
        isLoading: false,
      };

    case ALL_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        courseDetails,
        isLoading: false,
      };

    case COURSE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case DELETE_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        instructorCourses: state.instructorCourses.filter(
          (course) => course._id !== courseId
        ),
        newCoursesAdded: state.newCoursesAdded.filter(
          (course) => course._id !== courseId
        ),
      };
    case DELETE_COURSE_BY_ID_FAIL:
      return {
        ...state,
        message,
        isLoading: false,
      };
    case STUDENT_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myCourses,
      };
    case STUDENT_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
        message,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...initialState,
        message: message || '',
      };

    default:
      return {
        ...state,
      };
  }
};
