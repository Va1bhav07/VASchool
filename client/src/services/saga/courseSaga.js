import { takeLatest, call, put } from 'redux-saga/effects';
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
  COURSE_BY_ID_REQUEST,
  COURSE_BY_ID_SUCCESS,
  COURSE_BY_ID_FAIL,
  DELETE_COURSE_BY_ID_REQUEST,
  DELETE_COURSE_BY_ID_SUCCESS,
  DELETE_COURSE_BY_ID_FAIL,
  STUDENT_COURSES_REQUEST,
  STUDENT_COURSES_SUCCESS,
  STUDENT_COURSES_FAIL,
} from '../constants';
import { apiAxios } from '../../utilities/axios';

function* addCourse(action) {
  try {
    const url = '/api/createCourse';
    const newCourse = yield call(apiAxios.post, url, action.payload);
    console.log('createCourse :>> ', newCourse);
    if (newCourse?.success) {
      yield put({ type: ADD_COURSE_SUCCESS, newCourse: newCourse.data });
    } else throw new Error('error in addCourse');
  } catch (e) {
    yield put({ type: ADD_COURSE_FAIL, message: e.message });
  }
}

function* fetchInstructorCourses(action) {
  console.log('action :>> ', action);
  const createdBy = action?.payload;
  try {
    const url = `/api/getPublishedCourses/${createdBy}`;
    const courses = yield call(apiAxios.get, url);
    console.log('courses :>> ', courses);
    if (courses?.data?.length) {
      // this length will check if no course i.e [] then fail condition and no re render will occur
      yield put({
        type: INSTRUCTOR_COURSES_SUCCESS,
        instructorCourses: courses.data,
      });
    } else throw new Error('No published courses found');
  } catch (e) {
    yield put({ type: INSTRUCTOR_COURSES_FAIL, message: e.message });
  }
}

function* fetchAllCourses(action) {
  console.log('action :>> ', action);
  try {
    const url = `/api/getCourses`;
    const courses = yield call(apiAxios.post, url);
    console.log('courses :>> ', courses);
    if (courses?.data?.length) {
      // this length will check if no course i.e [] then fail condition and no re render will occur
      yield put({
        type: ALL_COURSES_SUCCESS,
        allCourses: courses.data,
      });
    } else throw new Error('No courses found');
  } catch (e) {
    yield put({ type: ALL_COURSES_FAIL, message: e.message });
  }
}

function* fetchCourseById(action) {
  console.log('fetchCourseByIdaction :>> ', action);
  try {
    const url = `/api/getCourse/${action?.payload}`;
    const course = yield call(apiAxios.get, url);
    console.log('course :>> ', course);
    if (course?.data?._id) {
      yield put({
        type: COURSE_BY_ID_SUCCESS,
        courseDetails: course.data,
      });
    } else throw new Error('error in fetchCourseById');
  } catch (e) {
    yield put({ type: COURSE_BY_ID_FAIL, message: e.message });
  }
}

function* deleteCourseById(action) {
  console.log('deleteCourseById :>> ', action);
  try {
    const url = `/api/deleteCourse/${action?.payload}`;
    const course = yield call(apiAxios.delete, url);
    console.log('course :>> ', course);
    if (course?.success) {
      yield put({
        type: DELETE_COURSE_BY_ID_SUCCESS,
        message: course.message,
        courseId: action?.payload,
      });
    } else throw new Error('error in deleteCourseById');
  } catch (e) {
    yield put({ type: DELETE_COURSE_BY_ID_FAIL, message: e.message });
  }
}

function* fetchStudentCourses(action) {
  console.log('fetchStudentCourses action :>> ', action);
  try {
    const url = `/api/getCourses`;
    const courses = yield call(apiAxios.post, url, { ids: action.payload });
    console.log('fetchStudentCourses :>> ', courses);
    if (courses?.data?.length) {
      // this length will check if no course i.e [] then fail condition and no re render will occur
      yield put({
        type: STUDENT_COURSES_SUCCESS,
        myCourses: courses.data,
      });
    } else throw new Error('No courses found');
  } catch (e) {
    yield put({ type: STUDENT_COURSES_FAIL, message: e.message });
  }
}

export default function* watchFork() {
  yield takeLatest(ADD_COURSE_REQUEST, addCourse);
  yield takeLatest(INSTRUCTOR_COURSES_REQUEST, fetchInstructorCourses);
  yield takeLatest(ALL_COURSES_REQUEST, fetchAllCourses);
  yield takeLatest(COURSE_BY_ID_REQUEST, fetchCourseById);
  yield takeLatest(DELETE_COURSE_BY_ID_REQUEST, deleteCourseById);
  yield takeLatest(STUDENT_COURSES_REQUEST, fetchStudentCourses);
}
