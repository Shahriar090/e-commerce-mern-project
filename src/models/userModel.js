const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
// user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: [4, "User name cannot be less than 4 characters"],
      maxLength: [20, "User name cannot be more than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, "Please, Enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: [6, "Password cannot be less than 6 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// creating model
const User = mongoose.model("User", userSchema);

module.exports = User;
