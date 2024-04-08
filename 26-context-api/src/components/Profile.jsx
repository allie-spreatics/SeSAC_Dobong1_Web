import { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { AgeContext } from "../contexts/AgeContext";

export default function Profile() {
  //   const nameContext = useContext(UserContext);
  //   const ageContext = useContext(AgeContext);
  //   console.log(nameContext);
  //   console.log(ageContext);
  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);

  const nameRef = useRef();
  const ageRef = useRef();

  const changeInfo = () => {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <div>
      <h3>사용자 profile</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>

      <input type="text" placeholder="이름 입력" ref={nameRef} />
      <input type="number" placeholder="나이 입력" ref={ageRef} />
      <br />
      <button onClick={changeInfo}>바꾸기</button>
    </div>
  );
}
