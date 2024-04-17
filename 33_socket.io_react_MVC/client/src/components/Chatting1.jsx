import { useEffect, useState } from "react";
import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me", //me, other, notice
      content: "내가 작성한 메세지",
    },
    {
      type: "other",
      content: "다른 사람이 작성한 메세지",
    },
    {
      type: "notice",
      content: "~~~님이 입장하셨습니다.",
    },
  ]);

  useEffect(() => {
    initSocketConnect();
    // [문제점] newChatList를 만들 때 mount시점의 chatList만 이용
    /* socket.on("notice", (notice) => {
      // {type: 'notice', content: notice}
      const newChatList = [
        ...chatList,
        { type: "notice", content: notice },
      ];

      setChatList(newChatList);
    }); */
  }, []);

  useEffect(() => {
    socket.on("notice", (notice) => {
      // {type: 'notice', content: notice}
      const newChatList = [
        ...chatList,
        { type: "notice", content: notice },
      ];

      setChatList(newChatList);
    });
  }, [chatList]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ul>
        <li>채팅방 UI만들기</li>
        <li>누가입장했는지 공지(socket.id)</li>
      </ul>
      <div className="container">
        <header>코코아톡🐛</header>
        <section>
          {/* <Speech chat={chatList[0]} />
          <Speech chat={chatList[1]} />
          <Notice chat={chatList[2]} /> */}
          {chatList.map((chat, i) =>
            chat.type === "notice" ? (
              <Notice key={i} chat={chat} />
            ) : (
              <Speech key={i} chat={chat} />
            )
          )}
        </section>
        <form
          className="msg-form"
          id="msg-form"
          onSubmit={handleSubmit}
        >
          <select id="dm-select">
            <option value="all">전체</option>
          </select>
          <input
            type="text"
            placeholder="메세지 입력"
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <button>전송</button>
        </form>
      </div>
    </>
  );
}
