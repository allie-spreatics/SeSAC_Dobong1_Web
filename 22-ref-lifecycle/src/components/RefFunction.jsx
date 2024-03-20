import { useRef, useState } from "react";

export function RefFunc1() {
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <>
      <p>버튼 클릭시 input에 focus 처리(useRef)</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}

// ref를 변수로 사용해보기
export function RefFunc2() {
  const refVal = useRef(1);
  const [stateVal, setStateVal] = useState(1);
  let variable = 1;

  const plusRef = () => {
    refVal.current += 1;
    console.log("ref 값 확인>>", refVal.current);
  };
  const plusState = () => {
    setStateVal(stateVal + 1);
    console.log("state 값 확인>>", stateVal);
  };
  const plusVariable = () => {
    variable += 1;
    console.log("var 값 확인>>", variable);
  };
  return (
    <>
      <h3>ref: {refVal.current}</h3>

      <h3>state: {stateVal}</h3>

      <h3>variable: {variable}</h3>

      <button onClick={plusRef}>ref+1</button>
      <button onClick={plusState}>state+1</button>
      <button onClick={plusVariable}>variable+1</button>
    </>
  );
}
