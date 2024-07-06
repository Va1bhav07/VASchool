const CoursesModal = require("../models/coursesModal");
const { validateUserData } = require("../utilities/helperFunctions");

// Create a new course
const createCourse = async (req, res) => {
  try {
    const {
      createdBy,
      author,
      title,
      price,
      language,
      description,
      videoUrl,
      thumbnail,
      level,
    } = req.body;
    // const thumbnail = req.file.filename; //use when upload file
    // console.log("thumbnail :>> ", thumbnail);
    const courseData = {
      createdBy,
      author,
      title,
      price,
      language,
      description,
      videoUrl,
      thumbnail,
      level,
    };
    const checkFields = [
      "createdBy",
      "author",
      "title",
      "price",
      "language",
      "description",
      "videoUrl",
      "thumbnail",
      "level",
    ];
    if (!validateUserData(courseData, checkFields)) {
      return res.status(400).json({
        success: false,
        message: "missing required fields.",
      });
    }
    console.log("courseData :>> ", courseData);
    const course = new CoursesModal(courseData);
    const newCourse = await course.save();
    res.status(201).json({
      success: true,
      data: newCourse,
      message: "Course created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all courses
const getCourses = async (req, res) => {
  try {
    const { ids } = req.body;
    let courses;
    if (ids && ids.length > 0) {
      // If 'ids' array is provided, find courses by ID
      courses = await CoursesModal.find({ _id: { $in: ids } });
      // console.log("courses :>> ", courses);
    } else {
      // If no 'ids' are provided, return all courses
      courses = await CoursesModal.find();
    }
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CoursesModal.findById(id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get course by ID
const getCourseByInstructorId = async (req, res) => {
  try {
    const { createdBy } = req.params;
    const courses = await CoursesModal.find({ createdBy });
    console.log("getCourseByInstructorId :>> ", courses);
    if (!courses) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update course by ID
const updateCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, videoUrl, thumbnail } = req.body;
    const updatedCourse = await CoursesModal.findByIdAndUpdate(
      id,
      { title, description, instructor, videoUrl, thumbnail },
      { new: true }
    );
    if (!updatedCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete course by ID
const deleteCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await CoursesModal.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  getCourseByInstructorId,
  updateCourseById,
  deleteCourseById,
};
