import { useRef, useState } from "react";

export default function Text() {
  const [text, setText] = useState<string>("");

  // 1. DOM 요소에 접근하는 ref
  //   generic을 이용해서 타입 작성 반드시 해야함
  const ref = useRef<HTMLInputElement>(null);

  // 2. 변수로 사용하는 ref
  const refVal = useRef<number>(0);

  //   state 변경함수
  const changeState = () => {
    if (typeof ref.current?.value === "string") {
      setText(ref.current.value);
    }
  };

  //   ref 변경함수
  const changeRef = (): void => {
    refVal.current += 1;
    console.log(refVal.current);
  };
  return (
    <div style={{ background: "#ffaaaa33" }}>
      <h4>useRef와 useState 사용해보기</h4>
      <input type="text" ref={ref} />
      <button onClick={changeState}>state 변경</button>
      <p>state:{text} </p>
      <p>ref:{ref.current?.value} </p>

      <br />
      <button onClick={changeRef}>ref +1</button>
      <p>ref Value: {refVal.current}</p>
    </div>
  );
}
