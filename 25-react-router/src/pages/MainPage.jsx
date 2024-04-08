import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();

  console.log(modeParams.get("mode")); //dark
  return (
    /* 
    - mode 가 dark면 classname으로 dark 추가,
    - scss에서 dark 클래스에 대한 스타일추가
    */
    <main className={`MainPage ${modeParams.get("mode")}`}>
      <h2>여기는 홈입니다.</h2>
      <button onClick={() => setModeParams({ mode: "dark" })}>Dark mode</button>
    </main>
  );
}
