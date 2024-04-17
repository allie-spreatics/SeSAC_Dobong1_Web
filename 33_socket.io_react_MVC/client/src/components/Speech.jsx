export default function Speech({ chat }) {
  /* 
    {
      type: "me", //me, other, notice
      content: "내가 작성한 메세지",
      isDm:true | undefined
      name: "aa" // 보낸사람의 닉네임
    },
    {
      type: "other",
      content: "다른 사람이 작성한 메세지",
    },
    */
  // console.log(chat);
  return (
    <>
      <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {chat.type === "other" && (
          <span className="nickname">{chat.name}</span>
        )}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
