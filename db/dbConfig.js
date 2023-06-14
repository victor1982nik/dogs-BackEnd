const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.SQL_HOST || "localhost",
  //port: process.env.DB_PORT,
});

module.exports = sequelize;
