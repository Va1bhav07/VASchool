const UserModel = require("../models/userModel");
const CartModel = require("../models/cartModel");
const Courses = require("../models/coursesModal");

const addToCart = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      cart = new CartModel({ user: userId, courses: [courseId] });
      await cart.save();
      return res.status(201).json({
        success: true,
        message: "Course added to cart successfully",
      });
    } else {
      if (!cart.courses.includes(courseId)) {
        cart.courses.push(courseId);
        await cart.save();
        return res.status(201).json({
          success: true,
          message: "Course added to cart successfully",
        });
      } else {
        return res.status(418).json({
          success: false,
          message: "Course already in cart",
        });
      }
    }
  } catch (error) {
    console.error("Error adding course to cart:", error);
    return res
      .status(501)
      .json({ success: false, message: "Internal server error" });
  }
};

const getCartData = async (req, res) => {
  try {
    const { courseIds } = req.body;
    if (!courseIds?.length)
      return res.status(404).json({ success: false, message: "no course ids" });

    const courses = await Courses.find({ _id: { $in: courseIds } });
    return res.status(208).json({
      success: true,
      message: "Cart data fetched",
      cartData: courses,
    });
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, message: "Error getting cart data" });
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    const index = cart.courses.indexOf(courseId);
    if (index !== -1) {
      cart.courses.splice(index, 1);
      await cart.save();
      return res
        .status(200)
        .json({ success: true, message: "Course removed from cart." });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Course not found in cart" });
    }
  } catch (error) {
    console.error("Error removing course from cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const addGuestCartToUser = async (req, res) => {
  try {
    const { userEmail, courseIds } = req.body;
    const user = await UserModel.findOne({ email: userEmail });
    const userId = user._id;
    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      cart = new CartModel({ user: userId, courses: courseIds });
    } else {
      const coursesNotInCart = courseIds.filter((courseId) => {
        return cart.courses.every((cartCourse) => {
          return cartCourse.toString() !== courseId.toString();
        });
      });
      if (coursesNotInCart !== 0) {
        coursesNotInCart.forEach((course) => cart.courses.push(course));
      }
    }
    await cart.save();
    return res.status(201).json({
      success: true,
      message: "Courses added to cart successfully",
      cartData: cart.courses,
    });
  } catch (error) {
    console.error("Error adding course to cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  addToCart,
  getCartData,
  deleteFromCart,
  addGuestCartToUser,
};
