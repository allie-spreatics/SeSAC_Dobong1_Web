import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //   [before] useMemo 사용 전
  /* const calc = () => {
    console.log("calculate..");

    return count * 2;
  }; */

  //   [after] useMemo 사용
  const calc = useMemo(() => {
    console.log("calculate....");
    return count * 2;
  }, [count]);
  return (
    <>
      <h3>UseMemo</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      {/* <p>{calc()}</p> */}
      <p>{calc}</p>
    </>
  );
}
