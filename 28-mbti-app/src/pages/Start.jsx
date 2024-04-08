import styled from "styled-components";
import OrangeButton from "../components/OrangeButton";
import { useDebugValue } from "react";
import { useDispatch } from "react-redux";
import { next } from "../store/module/mbti";
const MainImg = styled.img`
  width: inherit;
`;

const Header = styled.header`
  font-size: 3rem;
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI조사</Header>
      <MainImg
        src={process.env.PUBLIC_URL + "/assets/main.jpg"}
        alt="메인 이미지"
      />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다!
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
