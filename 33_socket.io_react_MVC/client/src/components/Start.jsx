import { useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Start() {
  const initSocketConnect = () => {
    console.log(socket.connected);
    if (!socket.connected) socket.connect(); // 클라이언트 소켓에 접속
    // console.log("after connect", socket.connected);
  };

  useEffect(() => {
    initSocketConnect();

    socket.emit("test", "테스트");
    socket.on("test2", (msg) => {
      console.log(msg);
    });
  }, []);
  return <p>소켓 연결 테스트입니닷</p>;
}
