const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }],
});

const CartModel = model("Carts", courseSchema);

module.exports = CartModel;
