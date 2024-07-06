const PurchasedCoursesModel = require("../models/purchasedCoursesModel");
const UserModel = require("../models/userModel");
const CartModel = require("../models/cartModel");

const placeOder = async (req, res) => {
  try {
    const { courseIds = [] } = req.body;
    const decodedUserData = req.user;
    const userId = decodedUserData._id;

    if (!userId || !courseIds.length) {
      return res.status(400).json({
        success: false,
        message: "No user or courses found in the request",
      });
    }

    await UserModel.findByIdAndUpdate(userId, { myCoursesIds: courseIds });
    await CartModel.findOneAndUpdate({ user: userId }, { myCoursesIds: [] });
    return res.status(200).json({
      success: true,
      message: "Courses has been added successfully!",
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res
      .status(501)
      .json({ success: false, message: "Internal server error" });
  }
};

const EnrollUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      cardNumber,
      expiry,
      cvvNumber,
      agreeTerms,
      checkoutCourses,
    } = req.body;
    if (
      !fullName ||
      !email ||
      !cardNumber ||
      !expiry ||
      !cvvNumber ||
      !agreeTerms
    ) {
      return res.status(400).json({
        success: false,
        message: "Personal and payment details are required.",
      });
    }
    const foundUser = await UserModel.findOne({ email: email });
    if (!foundUser)
      return res
        .status(404)
        .json({ success: false, message: "User does not exists" });

    let enrolledUser = await PurchasedCoursesModel.findOne({
      userId: foundUser._id,
    });
    if (!enrolledUser) {
      let purchasedCourses = new PurchasedCoursesModel({
        userId: foundUser._id,
        purchasedCourses: checkoutCourses.map((course) => course._id),
      });
      await purchasedCourses.save();
      return res.status(201).json({
        success: true,
        message: "Courses purchased successfully",
      });
    } else {
      let purchasedCourses = enrolledUser.purchasedCourses;

      const alreadyPurchasedCourseIds = checkoutCourses
        .filter((course) =>
          purchasedCourses.some(
            (purchasedCourse) => purchasedCourse._id === course._id
          )
        )
        .map((course) => course._id);
      if (alreadyPurchasedCourseIds === 0) {
        checkoutCourses.forEach(async (course) => {
          if (!enrolledUser.purchasedCourses.includes(course._id)) {
            purchasedCourses.push(course._id);
            await purchasedCourses.save();
          }
        });
        return res.status(201).json({
          success: true,
          message: "Courses purchased successfully",
        });
      } else {
        return res.status(418).json({
          success: false,
          message: "Some courses already purchased",
        });
      }
    }
  } catch (error) {
    console.error("Error purchasing courses:", error);
    return res
      .status(501)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { placeOder, EnrollUser };
