"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
let db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
