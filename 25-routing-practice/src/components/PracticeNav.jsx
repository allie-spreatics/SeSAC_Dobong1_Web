import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Nav = styled.nav`
  width: 100%;
  background-color: aliceblue;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin: 0 1rem;
  color: olive;
  &:hover {
    color: skyblue;
  }
`;
export default function PracticeHeader() {
  return (
    <Nav>
      <MyLink to="/">홈으로</MyLink>
      <MyLink to="/student/allie">학생</MyLink>
      <MyLink to="/student/codingon">코딩온</MyLink>
      <MyLink to="/student/new?name=jisoo">query</MyLink>
    </Nav>
  );
}
