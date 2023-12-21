require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3000;
module.exports = {
  serverPort,
};
