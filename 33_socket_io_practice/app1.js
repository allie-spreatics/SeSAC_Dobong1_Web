const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// socket.io코드 작성
io.on("connection", (socket) => {
  console.log(socket.id, "연결되었습니다.");

  socket.on("hello", (message, cb) => {
    console.log("client:", message);
    cb("안녕하세요.");
  });

  //   socket.on("hello", (message) => {
  //     console.log("client:", message);
  //     socket.emit("hello2", "안녕하세요");
  //   });

  socket.on("study", (message) => {
    console.log("client:", message);
    socket.emit("study2", "공부합시다.");
  });

  socket.on("bye", (message) => {
    console.log("client:", message);
    socket.emit("bye2", "잘가~");
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
