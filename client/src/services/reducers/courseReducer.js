import {
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAIL,
  INSTRUCTOR_COURSES_REQUEST,
  INSTRUCTOR_COURSES_SUCCESS,
  INSTRUCTOR_COURSES_FAIL,
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,
  ALL_COURSES_FAIL,
  // COURSE_BY_ID_REQUEST,
  COURSE_BY_ID_SUCCESS,
  COURSE_BY_ID_FAIL,
} from "../constants";

const initialState = {
  allCourses: [],
  myCourses: [],
  instructorCourses: [],
  courseData: {},
  isLoading: true,
};

export const courseReducer = (
  state = initialState,
  { type, courseData, message, instructorCourses, allCourses, course }
) => {
  console.log("type,courseData,message :>> ", type, courseData, message);
  switch (type) {
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        allCourses: [],
        myCourses: [],
        courseData: {},
        isLoading: false,
      };
    case ADD_COURSE_FAIL:
      return {
        ...state,
        message: "",
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
        isLoading: false,
      };

    case INSTRUCTOR_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

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
        courseData: course,
        isLoading: false,
      };

    case COURSE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
