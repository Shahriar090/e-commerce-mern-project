const createError = require("http-errors");
const users = require("../models/userModel");

const getUser = (req, res, next) => {
  try {
    console.log(req.body.id);
    res.status(200).json({
      message: "User data returned successfuly",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser };
