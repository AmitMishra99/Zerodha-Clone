const express = require("express");
const holdingsRoute = express.Router();
const Holdings = require("../models/holdings");

holdingsRoute.get("/holdingsData", async (req, res) => {
  let holdingsData = await Holdings.find({});
  res.status(200).json(holdingsData);
});

module.exports = holdingsRoute;
