const express = require("express");
const { Positions } = require("../models/positions");
const positionsRoute = express.Router();

positionsRoute.get("/positionsData", async (req, res) => {
  let positionsData = await Positions.find({});
  res.status(200).json(positionsData);
});

module.exports = positionsRoute;
