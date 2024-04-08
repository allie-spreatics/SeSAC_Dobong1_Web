import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import Container from "./components/practice/Container";
import FakePost from "./components/practice/FakePost";
import PostList from "./components/practice/PostList";

function App() {
  return (
    <div className="App">
      {/* <h1>ref</h1> */}
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 /> */}

      {/* <h1>life cycle</h1> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <FakePost /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
