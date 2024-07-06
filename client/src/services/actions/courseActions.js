import {
  ADD_COURSE_REQUEST,
  INSTRUCTOR_COURSES_REQUEST,
  ALL_COURSES_REQUEST,
  COURSE_BY_ID_REQUEST,
  DELETE_COURSE_BY_ID_REQUEST,
  STUDENT_COURSES_REQUEST,
} from '../constants';

export const addCourseAction = (data) => {
  return {
    type: ADD_COURSE_REQUEST,
    payload: data,
  };
};

export const getAllCoursesAction = (data) => {
  return {
    type: ALL_COURSES_REQUEST,
    payload: data,
  };
};

export const fetchCourseAction = (data) => {
  return {
    type: INSTRUCTOR_COURSES_REQUEST,
    payload: data,
  };
};

export const fetchCourseByIdAction = (data) => {
  return {
    type: COURSE_BY_ID_REQUEST,
    payload: data,
  };
};

export const deleteCourseByIdAction = (data) => {
  return {
    type: DELETE_COURSE_BY_ID_REQUEST,
    payload: data,
  };
};

export const fetchStudentCourses = (ids) => {
  return {
    type: STUDENT_COURSES_REQUEST,
    payload: ids,
  };
};
