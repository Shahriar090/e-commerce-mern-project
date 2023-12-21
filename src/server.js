const app = require("./app");
const { serverPort } = require("./secret");

// test
app.get("/", (req, res) => {
  res.send("Hello, From MERN stack E-commerce project....");
});

app.listen(serverPort, () => {
  console.log(`App is listening on PORT:${serverPort}`);
});
