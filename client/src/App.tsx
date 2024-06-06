import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import SignOut from "./pages/authentication/Signout";
import CourseDetails from "./pages/courses/course-details";
import InstructorDetails from "./pages/instructor/instructor-details";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About";
import FAQs from "./pages/FAQ";
import UserProfile from "./pages/userProfile/usrProfile";
import PrivateRoutes from "./Layout/routes/private-routes";
import ProtectedRoutes from "./Layout/routes/protected-routes";
import CourseListing from "./pages/courses/course-listing";
import PersistentLogin from "./components/PersistentLogin";
import PersistentCart from "./components/PeristentCart";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      {/* make a route file and set it there */}
      {/* PersistentCart will only work for guest users */}
      <Route element={<PersistentCart />}>
        <Route element={<PersistentLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/course-details/:id?" element={<CourseDetails />} />
          <Route
            path="/course-listing/filter/:language?/:difficulty?/:courselength?"
            element={<CourseListing />}
          />
          <Route path="/course-listing" element={<CourseListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/instructor-details" element={<InstructorDetails />} />
            <Route path="/myAccount" element={<UserProfile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            {/* routes for private i.e admin pages etc */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
