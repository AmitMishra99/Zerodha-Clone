require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database");
const Holdings = require("./models/holdings");
const Positions = require("./models/positions");
const Orders = require("./models/orders");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/holdingsData", async (req, res) => {
  let holdingsData = await Holdings.find({});
  res.status(200).json(holdingsData);
});

app.get("/positionsData", async (req, res) => {
  let positionsData = await Positions.find({});
  res.status(200).json(positionsData);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved !!");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App Started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
