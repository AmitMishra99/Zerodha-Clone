require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

const holdingsRoute = require("./routes/holdingsRoute");
const ordersRoute = require("./routes/ordersRoute");
const positionsRoute = require("./routes/positionsRoute");
const authRoute = require("./routes/authRoute");

app.use("/", holdingsRoute);
app.use("/", ordersRoute);
app.use("/", positionsRoute);
app.use("/", authRoute);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App Started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
