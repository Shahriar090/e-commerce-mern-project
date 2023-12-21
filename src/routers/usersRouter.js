const express = require("express");
const { getUser } = require("../controllers/usersController");
const userRouter = express.Router();

// user data get
userRouter.get("/", getUser);

module.exports = userRouter;
