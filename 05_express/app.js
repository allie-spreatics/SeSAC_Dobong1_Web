const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  //   response.send("hello express!! 안녕하세요 익스프레스");
  response.render("index.ejs");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
