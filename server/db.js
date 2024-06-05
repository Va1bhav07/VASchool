const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

// Connect Mongo DB
const connectDB = async () => {
  try {
    //const conn = await mongoose.connect(MONGODB_URI);
    const conn = await mongoose.connect(
      "mongodb+srv://capstone:capstone123@cluster0.rzqevhy.mongodb.net/learningplatform?retryWrites=true&w=majority"
    );
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: :>> ${error} `);
    process.exit(1);
  }
};

module.exports = connectDB;
