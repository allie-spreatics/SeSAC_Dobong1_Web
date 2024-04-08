import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./contexts/ThemeContext";
import { AgeContext } from "./contexts/AgeContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);
  return (
    <div className="App">
      <h1>상태관리1 context API</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      {/* state저장해보기 */}
      <AgeContext.Provider value={{ age, setAge }}>
        <UserContext.Provider value={{ name, setName }}>
          <Profile />
        </UserContext.Provider>
      </AgeContext.Provider>
    </div>
  );
}

export default App;
