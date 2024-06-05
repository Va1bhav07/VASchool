import { takeLatest, call, put } from "redux-saga/effects";
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
} from "../constants";
import { apiAxios } from "../../utilities/axios";

function* addCourse(action) {
  try {
    const url = "/api/createCourse";
    const course = yield call(apiAxios.post, url, action.payload);
    console.log("createCourse :>> ", course);
    if (course) {
      yield put({ type: ADD_COURSE_SUCCESS, course });
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: ADD_COURSE_FAIL, message: e.message });
  }
}

function* fetchInstructorCourses(action) {
  console.log("action :>> ", action);
  const createdBy = action?.payload;
  try {
    const url = `/api/getPublishedCourses/${createdBy}`;
    const courses = yield call(apiAxios.get, url);
    console.log("courses :>> ", courses);
    if (courses?.data?.length) {
      yield put({
        type: INSTRUCTOR_COURSES_SUCCESS,
        instructorCourses: courses.data,
      });
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: INSTRUCTOR_COURSES_FAIL, message: e.message });
  }
}

function* fetchAllCourses(action) {
  console.log("action :>> ", action);
  try {
    const url = `/api/getCourses`;
    const courses = yield call(apiAxios.get, url);
    console.log("courses :>> ", courses);
    if (courses?.data?.length) {
      yield put({
        type: ALL_COURSES_SUCCESS,
        allCourses: courses.data,
      });
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: ALL_COURSES_FAIL, message: e.message });
  }
}

function* fetchCourseById(action) {
  console.log("fetchCourseByIdaction :>> ", action);
  try {
    const url = `/api/getCourse/${action?.payload}`;
    const course = yield call(apiAxios.get, url);
    console.log("course :>> ", course);
    if (course?.data?._id) {
      yield put({
        type: COURSE_BY_ID_SUCCESS,
        course: course.data,
      });
    } else throw new Error("error in fetchlogin");
  } catch (e) {
    yield put({ type: COURSE_BY_ID_FAIL, message: e.message });
  }
}

export default function* watchFork() {
  yield takeLatest(ADD_COURSE_REQUEST, addCourse);
  yield takeLatest(INSTRUCTOR_COURSES_REQUEST, fetchInstructorCourses);
  yield takeLatest(ALL_COURSES_REQUEST, fetchAllCourses);
  yield takeLatest(COURSE_BY_ID_REQUEST, fetchCourseById);
}
