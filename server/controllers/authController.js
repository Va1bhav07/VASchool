const UserModel = require("../models/userModel");
const CartModel = require("../models/cartModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addCartDataToUser = async (userId, decryptedCartIteamIds) => {
  try {
    let cartData = await CartModel.findOne({ user: userId });

    if (decryptedCartIteamIds?.length) {
      // this is to add cart data if user added as guest
      if (cartData) {
        const courses =
          cartData?.courses?.map((courseId) => courseId.toString()) || [];
        const updatedCourses = [
          ...new Set([...decryptedCartIteamIds, ...courses]),
        ];
        console.log("updatedCourses :>> ", updatedCourses);
        cartData.courses = updatedCourses;
      } else {
        // if cart db does not exists then create one and save data
        cartData = new CartModel({
          user: userId,
          courses: decryptedCartIteamIds,
        });
      }
      await cartData.save();
    }
    return cartData;
  } catch (err) {
    console.error("Error adding cart data to user:", err);
    throw new Error(`Failed to add cart data to user.`);
  }
};

const JWT_Token = (userId, res) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // this will not allow JS to access token therefore it makes it more secure
    secure: true, // Set to true for HTTPS connections
    maxAge: 24 * 60 * 60 * 1000, // 1day
    // domain: ".onrender.com",
    sameSite: "none",
  });
};

const SignUpUser = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const { fullName, email, password, userType, decryptedCartIteamIds } =
      req.body;
    const userData = { email, password, fullName, userType: userType };
    if (!email || !password || !fullName) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and password are required.",
      });
    }
    const findUser = await UserModel.findOne({ email });
    if (findUser)
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    const newUserDoc = await UserModel.create(userData);
    const newUser = newUserDoc.toObject();
    if (!newUser) throw new Error("newUser returns falsy value");

    const cartData = await addCartDataToUser(
      newUser._id,
      decryptedCartIteamIds
    ); // this is to add cart info to user

    // JWT TOKEN
    JWT_Token(newUser._id, res);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      newUser: { ...newUser, cartData },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message} ===> ${error.name}`,
    });
  }
};

const LoginUser = async (req, res) => {
  console.log("LoginUser :>> ", req.body);
  try {
    const { email, password, decryptedCartIteamIds } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }
    const foundUser = await UserModel.findOne({ email })?.lean();
    if (!foundUser)
      return res
        .status(404)
        .json({ success: false, message: "User does not exists" });

    const confirmUser = await bcrypt.compare(password, foundUser.password);

    if (!confirmUser) {
      return res.status(401).json({
        success: false,
        message: "Password or email is wrong.",
      });
    }
    // console.log("foundUser._id :>> ", foundUser,);
    const cartData = await addCartDataToUser(
      foundUser._id,
      decryptedCartIteamIds
    );

    // JWT TOKEN
    JWT_Token(foundUser._id, res);

    res.status(200).json({
      success: true,
      message: "Login Successful.",
      foundUser: { ...foundUser, cartData },
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message}===> ${error.name}`,
    });
  }
};

// JWT TOKEN
const AccessToken = (req, res) => {
  try {
    const jwtToken = req.cookies?.jwt;
    if (!jwtToken) {
      return res
        .status(401)
        .json({ success: false, message: "User unauthorized" });
    }
    jwt.verify(jwtToken, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        console.error(err);
        res.clearCookie("jwt");
        return res.sendStatus(403);
      }
      try {
        const foundUser = await UserModel.findById(decoded._id)?.lean();
        if (!foundUser)
          return res
            .status(404)
            .json({ success: false, message: "User does not exist" });

        const cartData = await CartModel.findOne({ user: foundUser._id });
        // const userData = { ...foundUser, cartData };

        res.status(200).json({
          success: true,
          foundUser: { ...foundUser, cartData },
          message: "User revalidation successful",
        });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, error: "Server error in jwt verify" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const Logout = (req, res) => {
  try {
    const jwtToken = req.cookies?.jwt;
    console.log("jwtToken :>> ", jwtToken);
    if (jwtToken) {
      console.log("inside :>> ");

      res.clearCookie("jwt", { httpOnly: true });
      res.status(200).json({ success: true, message: "Logout Successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all users
const GetUsers = async (req, res) => {
  try {
    const courses = await UserModel.find();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id is required");
    }
    const deletedCourse = await UserModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const AdminLogin = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }
    const foundUser = true;
    if (!foundUser) throw new Error("foundUser returns falsy value");

    res.status(201).json({
      success: true,
      message: "Admin Found successfully.",
      foundUser,
    });
  } catch (error) {
    console.error("Error finding admin:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message}===> ${error.name}`,
    });
  }
};

module.exports = {
  SignUpUser,
  LoginUser,
  GetUsers,
  DeleteUser,
  AdminLogin,
  AccessToken,
  Logout,
};
