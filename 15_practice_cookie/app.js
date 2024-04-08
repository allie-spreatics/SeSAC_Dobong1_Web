const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser("secret123456789"));

const cookieConfig = {
  signed: true,
  maxAge: 1000 * 60 * 60 * 24,
};

app.get("/", (req, res) => {
  // TODO: index.ejs 두번째 인자로 popup key에 쿠키값 보내기
  console.log(req.signedCookies); // {popup:'hide'}
  console.log(req.cookies);
  res.render("index", { popup: req.signedCookies.popup });
  //   res.render("index");
});

app.post("/setCookie", (req, res) => {
  // TODO: 쿠키 생성
  //   쿠키이름: 'popup', 쿠키값:'hide'
  res.cookie("popup", "hide", cookieConfig);

  res.send("쿠키 설정 성공!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
req 객체
 - req.cookies: 쿠키 정보 담겨있음
 - req.signedCookies: 암호화된 쿠키 정보 담겨있음
*/

/*
res 객체
- res.cookie(키, 값, 옵션): 쿠키 설정
- res.clearCookie(키, 값, 옵션): 쿠키 제거
*/
