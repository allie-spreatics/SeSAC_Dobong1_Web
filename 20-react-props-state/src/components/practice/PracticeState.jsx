import { useState } from "react";

export default function PracticeState() {
  const [number, setNumber] = useState(0);
  let variable = 0;
  const increase = () => {
    setNumber(number + 1);
    variable += 1;
    console.log(
      `변수(variable): ${variable}, 스테이트(number):${number}`
    );
  };
  const decrease = () => {
    setNumber(number - 1);
    variable -= 1;
  };
  return (
    <div>
      <div>{number <= 7 ? number + "😊" : number + "🐛"} </div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
