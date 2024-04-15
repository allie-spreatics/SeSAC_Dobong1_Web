const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("talk_basic");
});

io.on("connection", (socket) => {
  /* [실습3] 입장-1 */
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`);

  /* [실습4] 채팅 주고받기 */
  // [4-2] 메세지를 전달을 받아서, 전체에게 메세지 뿌려주기
  socket.on("send", (message) => {
    console.log(`${socket.id}: ${message}`);
    io.emit("message", { id: socket.id, message: message });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
