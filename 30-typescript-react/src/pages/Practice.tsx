import { Link } from "react-router-dom";
import HeaderMenu from "../components/Header";
// import PostList from "../components/practice/PostList";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <br />
      <Link to="/practice/matzip">맛집페이지</Link>
      <h4>연습문제</h4>
      {/* <PostList /> */}
    </>
  );
}
