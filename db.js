const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

module.exports = connectToDB;
