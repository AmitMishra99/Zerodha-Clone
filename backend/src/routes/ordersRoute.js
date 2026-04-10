const express = require("express");
const ordersRoute = express.Router();
const Orders = require("../models/orders")

ordersRoute.post("/newOrder", async (req, res) => {
  let newOrder = new Orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved !!");
});

module.exports = ordersRoute;
