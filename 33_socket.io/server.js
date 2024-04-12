const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const server = http.createServer(app);

// 소켓이 http모듈로 생성된 서버에 동작
const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

app.get("/room", (req, res) => {
  res.render("room");
});

io.on("connection", (socket) => {
  console.log("socket id >>", socket.id);
  /* socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    cb("응답!");
  }); */

  //   socket.on("new_message", (message, cb) => {
  //     console.log(message);
  //     cb(message);
  //   });

  socket.on("new_message", (message) => {
    io.emit("message_render", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} 연결 종료`);
  });

  // ---------------[room.ejs], 채팅방 만들기 ---------
  //   console.log("방 만들어지기 전,", socket.rooms);
  // 2. 클라이언트에게 방 이름을 전달받아서 방 생성
  socket.on("join", (chatRoom) => {
    console.log(chatRoom);

    socket.join(chatRoom); // join(채팅방이름) 이용해서 채팅방 만들기
    // console.log("방 만들어고 나서,", socket.rooms);
    socket.room = chatRoom;

    // 3. 내가 포함한 방 client에게 입장 메세지 전달
    // 나빼고 내가 참여한 채팅방 모두에게
    // socket.broadcast
    //   .to(chatRoom)
    //   .emit("userjoin", `[${socket.id}]님이 입장하셨습니다.`);

    // 나 포함 내가 참여한 채팅방 모두에게
    io.to(chatRoom).emit(
      "userjoin",
      `[${socket.id}]님이 입장하셨습니다.`
    );
  });

  // 6. 하나의 클라이언트에게 메세지를 받아서
  //    (특정 방의) 전체 클라이언트에게 보낸다.
  socket.on("message", (message) => {
    console.log(message);

    io.to(socket.room).emit("message_toAll", message, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
