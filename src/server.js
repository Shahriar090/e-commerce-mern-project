const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secret");

// test
app.get("/", (req, res) => {
  res.send("Hello, From MERN stack E-commerce project....");
});

app.listen(serverPort, async () => {
  console.log(`App is listening on PORT:${serverPort}`);
  await connectDB();
});
