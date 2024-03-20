import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha("");
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };

  //   삭제 작업
  const deleteAlpha = (id) => {
    // console.log(id); // id 확인해보기
    const newAlpha = list.filter((alpha) => alpha.id !== id);
    setList(newAlpha);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        value={inputAlpha}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>add alphabet</button>
      <ol>
        {list.map((alphabet) => (
          <li
            key={alphabet.id}
            onDoubleClick={() => deleteAlpha(alphabet.id)}
          >
            {alphabet.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
