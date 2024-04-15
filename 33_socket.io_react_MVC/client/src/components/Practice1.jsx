import { useState } from "react";

export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState("");
  return (
    <>
      <button>hello</button>
      <button>study</button>
      <button>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
