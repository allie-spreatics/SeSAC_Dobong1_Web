import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";
import { MatzipForm } from "../types/interface";
import CardContainer from "../components/practice/CardContainer";
import MatzipHeader from "../components/practice/MatzipHeader";

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  background-color: aliceblue;
`;
const GridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
export default function Matzip() {
  const mapoArr: MatzipForm[] = [
    {
      imgSrc: "/assets/을밀대.webp",
      title: "을밀대",
      desc: "~~~~~설명 어쩌구 주절주절",
      idx: 1,
    },
    {
      imgSrc: "/assets/수퍼.jpg",
      title: "수퍼",
      desc: "설명어쩌구2",
      idx: 2,
    },
    {
      imgSrc: "/assets/옴레스토랑.jpg",
      title: "옴레스토랑",
      desc: "설명어쩌구3",
      idx: 3,
    },
    {
      imgSrc: "/assets/한강껍데기.jpg",
      title: "한강껍데기",
      desc: "설명어쩌구4",
      idx: 4,
    },
    {
      imgSrc: "/assets/마포갈매기.jpg",
      title: "마포갈매기",
      desc: "설명어쩌구5",
      idx: 5,
    },
    {
      imgSrc: "/assets/소점.jpg",
      title: "소점",
      desc: "긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트",
      idx: 6,
    },
  ];

  const gangdongArr: MatzipForm[] = [
    {
      imgSrc: "",
      title: "봉평 메밀촌",
      desc: "~~~~~설명 어쩌구 주절주절",
      idx: 1,
    },
    { imgSrc: "", title: "아바이순대", desc: "설명어쩌구2", idx: 2 },
    {
      imgSrc: "",
      title: "서울육개장 짚불고기",
      desc: "설명어쩌구2",
      idx: 3,
    },
    { imgSrc: "", title: "셀프하우스", desc: "설명어쩌구2", idx: 4 },
    { imgSrc: "", title: "호치민", desc: "설명어쩌구2", idx: 5 },
    { imgSrc: "", title: "평양만두집", desc: "설명어쩌구2", idx: 6 },
  ];

  const dobongArr: MatzipForm[] = [
    {
      imgSrc: "",
      title: "마쯔무라 돈까스",
      desc: "~~~~~설명 어쩌구 주절주절",
      idx: 1,
    },
    { imgSrc: "", title: "하누소", desc: "설명어쩌구2", idx: 2 },
    { imgSrc: "", title: "판다쓰", desc: "설명어쩌구2", idx: 3 },
    { imgSrc: "", title: "옹기꽃게장", desc: "설명어쩌구2", idx: 4 },
    { imgSrc: "", title: "호호분식", desc: "설명어쩌구2", idx: 5 },
  ];

  const [showGangdong, setShowGangdong] = useState(false);
  const [showDobong, setShowDobong] = useState(true);
  const [showMapo, setShowMapo] = useState(false);
  return (
    <>
      <GlobalStyle />
      <MatzipHeader
        mapo={showMapo}
        dobong={showDobong}
        gangdong={showGangdong}
        setMapo={setShowMapo}
        setDobong={setShowDobong}
        setGangdong={setShowGangdong}
      />
      <Inner>
        <GridDiv>
          <CardContainer
            showContent={showGangdong}
            matzipInfo={gangdongArr}
          />
          <CardContainer
            showContent={showMapo}
            matzipInfo={mapoArr}
          />
          <CardContainer
            showContent={showDobong}
            matzipInfo={dobongArr}
          />
        </GridDiv>
      </Inner>
    </>
  );
}
