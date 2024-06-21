const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "student",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10, (error, hash) => {
    console.log("hash on pre save pass userModal.js :>> ", this.password);
    this.password = hash;
    next();
  });
});

const UserModal = model("Users", userSchema);
module.exports = UserModal;
