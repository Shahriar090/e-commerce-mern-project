require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3000;
const mongoDbUrl = process.env.MONGODB_ATLAS_URL;
module.exports = {
  serverPort,
  mongoDbUrl,
};
