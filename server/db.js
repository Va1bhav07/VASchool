const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

// Connect Mongo DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: :>> ${error} `);
    process.exit(1);
  }
};

module.exports = connectDB;
