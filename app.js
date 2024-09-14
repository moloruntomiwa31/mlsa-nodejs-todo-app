const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectToDB = require("./db");
dotenv.config();

const app = express();

// mongoose.connect("mongodb://localhost/todo_express", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
connectToDB();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
