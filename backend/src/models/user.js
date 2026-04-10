const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minLength: 2,
      maxLength: 25,
      trim: true,
      required: true,
    },
    emailID: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid Email Format !!",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }),
        message: "Plz Enter a Strong password !!",
      },
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.passwordValid = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getJWT = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
