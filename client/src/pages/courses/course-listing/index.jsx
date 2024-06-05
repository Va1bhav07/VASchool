import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CourseFilter } from "../filter-courses";
import CourseList from "../courseList";
import { useSelector, useDispatch } from "react-redux";
import { getAllCoursesAction } from "../../../services/actions/courseActions";

function CourseListing() {
  const location = useParams();
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const courseReducer = useSelector(({ courseReducer }) => courseReducer);
  const { allCourses = [] } = courseReducer;

  useEffect(() => {
    !allCourses?.length && dispatch(getAllCoursesAction());
    filterData(location);
  }, [location, allCourses]);
  async function filterData(location) {
    const { language, difficulty, courselength } = location;
    setCourses(allCourses);
    var newArray = "";
    if (language != "All" && language != undefined) {
      newArray = courses.filter(function (el) {
        return el.language == language;
      });
    }
    if (difficulty != "All" && difficulty != undefined) {
      newArray = courses.filter(function (el) {
        return el.level == difficulty;
      });
    }
    if (courselength != "All" && courselength != undefined) {
      if (courselength == "less than 15 day") {
        newArray = courses.filter(function (el) {
          return (
            Math.ceil(
              Math.abs(new Date() - new Date(el.Publish_date)) /
                (1000 * 60 * 60 * 24)
            ) <= 15
          );
        });
      } else {
        newArray = courses.filter(function (el) {
          return (
            Math.ceil(
              Math.abs(new Date() - new Date(el.Publish_date)) /
                (1000 * 60 * 60 * 24)
            ) <= 30
          );
        });
      }
    }
    if (newArray != "") setCourses(newArray);
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-3">
          <CourseFilter />
        </div>
        <div className="col-lg-9">
          <section>
            <h4>Total : {courses.length} courses</h4>
            {courses.map(function (course) {
              return <CourseList key={course._id} course={course} />;
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default CourseListing;
