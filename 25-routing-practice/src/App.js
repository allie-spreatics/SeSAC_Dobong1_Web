import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
function App() {
  return (
    <div className="App">
      <MyLink>안녕하세요</MyLink>
    </div>
  );
}

export default App;
