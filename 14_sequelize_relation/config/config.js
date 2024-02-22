// env 사용 설정
require("dotenv").config();
// const dotenv = require("dotenv");
// dotenv.config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };
