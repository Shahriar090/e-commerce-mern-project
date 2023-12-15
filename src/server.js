const app = require("./app");

const PORT = 5000;
// test
app.get("/", (req, res) => {
  res.send("Hello, From MERN stack E-commerce project....");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
