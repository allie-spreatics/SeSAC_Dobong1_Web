import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function NameProvider({ children }) {
  const [name, setName] = useState("홍길동");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
