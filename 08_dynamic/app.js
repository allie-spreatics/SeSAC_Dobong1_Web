const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// open api 사용
app.get("/open-api", function (req, res) {
  res.render("api");
});

// 실습문제
const id = "pororo";
const pw = "1234";
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/axios-practice1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios-practice2", (req, res) => {
  console.log(req.body);
  // 서버의 계정정보와, 클라이언트의 계정정보가 일치하는지
  const { id: clientId, password: clientPw } = req.body;
  if (clientId === id && clientPw === pw) {
    res.send({
      userInfo: req.body,
      // ...req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
