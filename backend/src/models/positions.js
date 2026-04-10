const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema({
  prdt: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Positions = mongoose.model("Positions", positionsSchema);
module.exports = { Positions };
