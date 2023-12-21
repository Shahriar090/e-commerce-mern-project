const express = require("express");
const morgan = require("morgan");
const app = express();
const createError = require("http-errors");

const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/usersRouter");

// express rate limiter
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many request from this ip, Please try again letter",
});

// middleware
app.use(rateLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
// get
app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Data get successfuly",
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
