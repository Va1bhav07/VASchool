const { Schema, model } = require("mongoose");

const purchasedCourseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  purchasedCourses: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }],
});

const PurchasedCoursesModel = model("purchasedCourses", purchasedCourseSchema);

module.exports = PurchasedCoursesModel;
