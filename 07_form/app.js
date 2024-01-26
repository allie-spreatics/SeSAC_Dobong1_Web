const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("in");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, //{id:'',email:'',pw:''}
  });
  //  res.render('뷰', {보내줄 데이터})
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 옵니다!
  console.log(req.body);
  //   res.send(`
  //   <ul>
  //     <li>${req.body.id2}</li>
  //     <li>${req.body.pw2}</li>
  //   </ul>
  //   `)
  console.log("안녕하세요 ~~");
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body, //{id2:'',pw2:'',agree:[]}
  });
});

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

/* 실습문제 */
/* 
  /practice1
  /practice2
*/
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

app.get("/practice", (req, res) => {
  console.log(req.query);
  res.render("practice/result.ejs", {
    userInfo: req.query,
    addInfo: false,
  });
});

app.post("/practice", (req, res) => {
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice/result.ejs", {
    userInfo: postInfo,
    addInfo: true,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
