const { Schema, model } = require("mongoose");

const instructorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  userImg: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  department: String,
  bio: String,
  website: String,
  skills: {
    type: Array,
    required: true,
  },
  coursesTaught: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  // courses
});

const instructorsModal = model("instructors", instructorSchema);
module.exports = instructorsModal;
