import React, { useEffect, useState } from "react";
import "./index.css";
import HomeComp from "./HomeComp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCheckoutCoursesAction } from "../../services/actions/checkoutActions";

import {
  setEncryptedGuestCartData,
  getDecryptedGuestCartData,
} from "../../utilities/cartUtilities";

function Home() {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.authReducer);
  const cartData = useSelector((state) => state.cartReducer.cartData);
  const decryptedGuestCartData = getDecryptedGuestCartData();

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await apiAxios.get("/api/getCourses");
  //       setCourses(response.data);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };
  //   fetchCourses();
  // }, []);

  const featuredCourses = courses.filter((course) => {
    return (
      course.author === "Nirav-instructor" ||
      course.author === "Vaibhav-instructor"
    );
  });

  const handleAddToCart = (course) => {
    console.log("homeTest :>> ");
  };
  const handleEnroll = (course) => {
    dispatch(setCheckoutCoursesAction([course]));
    console.log(`+++++++++++++>>>>>>>>>>> ${course.length}`);
    navigate("/checkout" /*, { state: { selectedCourse: course } }*/);
  };

  return (
    <HomeComp
      open={open}
      setOpen={setOpen}
      // dummyData={dummyData}
      courses={featuredCourses}
      handleAddToCart={handleAddToCart}
      cartDataLength={
        cartData ? cartData.length : decryptedGuestCartData.length
      }
      handleEnroll={handleEnroll}
    />
  );
}

export default Home;
