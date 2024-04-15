const socketIO = require("socket.io");
function socketHandler(server) {
  // server: app.js에서 http 기반 서버 전달받을 예정
  // cors: 다른 서버에서 보내는 요청 제한
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", // react server와 통신하기 위함
    },
  });

  io.on("connection", (socket) => {
    socket.on("test", (message) => {
      console.log(message);
      socket.emit("test2", "잘 받았습니다.");
    });

    socket.on("disconnect", () => {
      // 클라이언트 연결 해제
    });
  });
}

module.exports = socketHandler;
