const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 5000;

// middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, From MERN stack E-commerce project....");
});

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Data returned successfuly",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
