const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

const connectDB = async () => {
  await mongoose.connect(mongoURL);
  console.log("MongoDB connected successfully");
};

module.exports = connectDB;
