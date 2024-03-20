import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
    </div>
  );
}

export default App;
