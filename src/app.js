const express = require("express");
const morgan = require("morgan");
const app = express();
const createError = require("http-errors");
// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test

// get
app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Data get successfuly",
  });
});
// user data get
app.get("/api/users", (req, res) => {
  console.log(req.body.id);
  res.status(200).json({
    message: "User data returned successfuly",
  });
});

//client error handling

app.use((req, res, next) => {
  next(createError(404, "Route not found, try gin letter"));
});

// server error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
