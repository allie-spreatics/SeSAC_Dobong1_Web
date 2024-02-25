const express = require("express");

const router = express.Router();

const passport = require("passport");

// function isLogin(req, res, next) {
//   /*
//     passport를 이용해서 로그인한 유저는 req.user 에 정보가 담기게 됨
//     "req.user 정보가 있다면 > 로그인 되어있는 회원이다!"
//     */
//   if (req.user) {
//     next(); //다음 미들웨어로 이동
//   } else {
//     res.status(300);
//     res.send("로그인이 필요한 서비스입니다.");
//   }
// }

// module.exports = { isLogin };
