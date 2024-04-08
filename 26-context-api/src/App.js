import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./contexts/ThemeContext";
import AgeProvider from "./components/provider/AgeProvider";
import NameProvider from "./components/provider/NameProvider";

function App() {
  return (
    <div className="App">
      <h1>상태관리1 context API</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      {/* state저장해보기 */}
      <AgeProvider>
        <NameProvider>
          <Profile />
        </NameProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
