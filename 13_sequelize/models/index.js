"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

console.log("config >> ", config);

// const sequelize = new Sequelize(DB명, 사용자명, 비밀번호, config 정보 전체)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; //db = {sequelize:sequelize}
db.Sequelize = Sequelize; //db = {sequelize:sequelize, Sequelize:Sequelize}

// 모델이 여러개 있으면,
// 여러 개의 모델을 require 한 이후에 sequelize, Sequelize를 전달해야 함
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// [추가]
db.User = require("./User")(sequelize, Sequelize);
module.exports = db;
// db라는 변수를 내보내기 하는 중
