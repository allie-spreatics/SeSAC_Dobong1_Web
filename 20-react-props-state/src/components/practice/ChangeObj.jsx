import { useState } from "react";

export default function ChangeObj(props) {
  const { objArr } = props; //array

  const [idx, setIdx] = useState(0);
  function changeProfile() {
    if (idx === objArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  }
  return (
    <div>
      <p>이름: {objArr[idx].name}</p>
      <p>나이: {objArr[idx].age}</p>
      <p>별명: {objArr[idx].nickName}</p>
      <button onClick={changeProfile}>다른멤버 확인</button>
    </div>
  );
}
