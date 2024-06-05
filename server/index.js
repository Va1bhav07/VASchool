const express = require("express");
const cookieParse = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const connectDB = require("./db");
const route = require("./routes");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json()); //body parser
app.use(
  cors({
    credentials: true, // this is needed to set jwt in cokkies and make sure axios withCredentials = true
    origin: ["http://localhost:5173", "https://edu-flex-frontend.onrender.com"],
  })
); // allow cors
app.use("/", express.static("images"));

app.use(cookieParse());
//routes
app.use("/", route);

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
