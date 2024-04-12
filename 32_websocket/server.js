const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("clients");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(server); // Server 객체

// 웹소켓 서버 접속
const wsServer = new ws.Server({ server });

const sockets = []; // 클라이언트들을 담을 배열

// return string
// 현재 시간관련 타임스탬프와 랜덤문자열을 결합 > 고유 식별자 생성
function generateUniqueId() {
  // 타임스탬프
  const timestamp = Date.now().toString(36); // 36진수로 반환한 문자열

  //   랜덤 문자열
  const randomString = Math.random().toString(36).substring(2);
  //   "abcdef".substring(2); //2번 index 부터 끝index까지 반환

  return timestamp + randomString; // ex> luw0qu0rpc2c6cb0x
}

/* 
   ws모듈(설치 필요)의 이벤트
   - connection: 클라이언트와 웹소켓 서버와 연결되었을 때
   - message: 클라이언트로부터 메세지를 받았을 때
   - error: 연결중에 오류가 났을 때
   - close: 클라이언트와 연결 종료
*/

wsServer.on("connection", (socket) => {
  //   console.log(socket); // (하나의) 클라이언트에 대한 소켓정보
  console.log("connenction?!?!?!?");
  const clientId = generateUniqueId();
  sockets.push(socket);
  socket.on("message", (message) => {
    /* 
    toString() 메소드를 사용하지 않아도
    `${버퍼객체}` 처럼 템플릿 리터럴을 함께 쓰면
    암시적으로 toString() 사용할 수 있음
    */
    console.log(`${message}`); // 버퍼 객체
    // {"msg":"안녕하세요","name":"유진형"}
    // const buftoString = message.toString("utf-8");
    // console.log(buftoString);

    // 모든 클라이언트에게 동일한 메세지를 보내기 위해
    // sockets 배열 순회
    sockets.forEach((element) => {
      element.send(`${message}`); //json data send
    });
    // socket.send("하나의 클라이언트에게 메세지");
  });

  socket.on("error", (err) => {
    console.log("에러가 났어요", err);
  });

  socket.on("close", () => {
    console.log(`클라이언트(${clientId})와 연결이 종료되었어요`);
  });
});
