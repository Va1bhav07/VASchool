const InstructorsModal = require("../../models/instructorModal");
const { validateUserData } = require("../../utilities/helperFunctions");
const UserModel = require("../../models/userModel");

const GetInstructors = async (req, res) => {
  try {
    const courses = await InstructorsModal.find();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const InstructorDetails = async (req, res) => {
  console.log("object :>> ", req.body);
  try {
    const {
      userId,
      userImg,
      phone,
      address,
      title,
      institution,
      department,
      bio,
      website,
      skills,
    } = req.body;
    const userData = {
      userImg,
      phone,
      address,
      title,
      institution,
      department,
      bio,
      website,
      skills,
    };
    const checkFields = ["phone", "address", "title", "institution", "skills"];
    if (!validateUserData(userData, checkFields)) {
      return res.status(400).json({
        success: false,
        message: "missing required fields.",
      });
    }
    console.log("validateUserData pass:>> ");
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const updatedInstructor = await InstructorsModal.findOneAndUpdate(
      { user: user._id }, // Match the instructor document with the specified userId
      userData,
      { new: true } // Return the updated document
    );

    console.log("updatedInstructor :>> ", updatedInstructor);

    let instrcutorData = !!updatedInstructor && updatedInstructor;
    console.log("instrcutorData1 :>> ", instrcutorData);
    if (!updatedInstructor) {
      instrcutorData = await InstructorsModal.create({
        user: user._id,
        ...userData,
      });
      console.log("createInstructor :>> ", instrcutorData);

      if (!instrcutorData)
        throw new Error("instrcutorData returns falsy value");
    }

    res.status(201).json({
      success: true,
      message: "Instructor data added successfully.",
      instrcutorData,
    });
  } catch (error) {
    console.log("error in instructorDetails :>> ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errormsg: `${error.message} ===> ${error.name}`,
    });
  }
};

module.exports = { InstructorDetails, GetInstructors };
