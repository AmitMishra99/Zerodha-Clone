const express = require("express");
const User = require("../models/user");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");

// signup
authRoute.post("/signup", async (req, res) => {
  try {
    const { firstName, emailID, password } = req.body;
    const existingUser = await User.findOne({ emailID });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, msg: "Email already registered " });
    }

    const user = new User({
      firstName,
      emailID,
      password,
    });

    await user.save();

    res.status(201).json({
      success: true,
      msg: "Signup Succesfully !! ",
      user: {
        id: user._id,
        emailID: user.emailID,
      },
    });
  } catch (e) {
    console.error("Signup error:", e);
    res.status(500).json({ success: false, msg: "Internal Server Error " });
  }
});

// login
authRoute.post("/login", async (req, res) => {
  try {
    const { emailID, password } = req.body;

    const user = await User.findOne({ emailID }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid emailID or password" });
    }

    // matching password of signup user
    const isPasswordValid = await user.passwordValid(password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid emailID or password" });
    }

    // 3. Generating token
    const token = await user.getJWT();

    // 4. Passing the token into the browser's cookies
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 60 * 60 * 1000),
    });

    res.status(200).json({
      success: true,
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        emailID: user.emailID,
      },
    });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
});

// me
authRoute.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    res.json({
      user: {
        id: user._id,
        firstName: user.firstName,
        emailID: user.emailID,
      },
    });
  } catch (e) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = authRoute;
