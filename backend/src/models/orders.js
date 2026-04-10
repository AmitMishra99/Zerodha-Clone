const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = mongoose.model("Orders", ordersSchema);
