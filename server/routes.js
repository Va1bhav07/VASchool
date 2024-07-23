const router = require("express").Router();
const authController = require("./controllers/authController");
const instrctutorController = require("./controllers/instructorControllers");
const courseController = require("./controllers/courseController");
const verifyJWT = require("./middleware/verifyJWT");
// const { upload } = require("./utilities/multerFile");
const cartController = require("./controllers/cartController");
const checkoutController = require("./controllers/checkoutController");

router.get("/", (_, res) => {
  return res.json("Api is working!...");
});

// ============== Auth Api ===============
router.post("/login", authController.LoginUser);
router.post("/signup", authController.SignUpUser);
router.get("/api/logout", authController.Logout);
router.get("/api/accessToken", authController.AccessToken);
router.get("/api/getUsers", verifyJWT, authController.GetUsers);
router.delete("/api/deleteUser", authController.DeleteUser);

// ============== Instructor Api ===============
router.get("/api/getInstructors", instrctutorController.GetInstructors);
router.post("/api/instructorData", instrctutorController.InstructorDetails);

// ============== Course Api ===============
router.post("/api/getCourses", courseController.getCourses);
router.get(
  "/api/getPublishedCourses/:createdBy",
  courseController.getCourseByInstructorId
);
// use this route when upload file
// router.post(
//   "/api/createCourse",
//   upload.single("thumbnail"),
//   courseController.createCourse
// );
router.post("/api/createCourse", courseController.createCourse);
router.get("/api/getCourse/:id", courseController.getCourseById);
router.delete("/api/deleteCourse/:id", courseController.deleteCourseById);

router.post("/api/admin-login", authController.AdminLogin);

// ============= Cart Api ======================
router.post("/api/addToCart", cartController.addToCart);
router.post("/api/getCartData", cartController.getCartData);
router.delete("/api/deleteFromCart", cartController.deleteFromCart);
router.post("/api/addGuestCartToUser", cartController.addGuestCartToUser);

// ================= Checkout Api =================
router.post("/checkout", checkoutController.EnrollUser);
router.post("/api/placeOder", checkoutController.placeOder);

module.exports = router;
