import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  //   const [isOpen, setIsOpen] = useState(true);
  const [isOpen, setIsOpen] = useToggle(true);
  return (
    <>
      <h3>custom hook 사용해보기</h3>
      <div onClick={setIsOpen}>
        Q.리액트에서 커스텀 훅 만들 수 있나요????????
      </div>
      {isOpen && <div>A. 네!!</div>}
    </>
  );
}
