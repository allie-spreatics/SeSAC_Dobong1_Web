import { useState } from "react";

export default function PracticeMap() {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codee@test.com" },
    { id: 2, name: "allie", email: "allie@test.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   실제 등록시켜주는 함수
  /* 
  - userList state를 변경시켜 재랜더링되도록
  - 빈값이 입력되면 alert 띄우기
  - 등록후에 input 빈칸 만들기
  */
  const registerUser = () => {
    // 이름과 이메일 값 중 하나라도 안들어왔다면,
    if (name.trim().length === 0 || email.trim().length === 0) {
      return alert("이메일과 이름 모두 작성해주세요");
    }

    setUserList(
      userList.concat({
        id:
          userList.length === 0
            ? 1
            : userList[userList.length - 1].id + 1,
        name,
        email,
      })
    );

    setName("");
    setEmail("");
  };

  //   엔터로 등록시켜주는 함수
  // - 두번째 input[type="email"] 에 Enter 쳤을 때 등록되도록
  const enterRegister = (e) => {
    if (e.key === "Enter") registerUser();
  };

  //   더블클릭했을 때 삭제되는 함수
  const deleteUser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setUserList(newUserList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="이메일"
          onKeyDown={enterRegister}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <button onClick={registerUser}>등록</button>
      </div>
      {userList.map((user) => {
        return (
          <h4
            key={user.id}
            onDoubleClick={() => {
              deleteUser(user.id);
            }}
          >
            {user.name}: {user.email}
          </h4>
        );
      })}
    </div>
  );
}
