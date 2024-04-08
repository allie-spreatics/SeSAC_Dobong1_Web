import { MatzipForm } from "../../types/interface";
import Card from "./Card";

interface Props {
  showContent: boolean;
  matzipInfo: MatzipForm[];
}

export default function CardContainer({
  showContent,
  matzipInfo,
}: Props) {
  return (
    <>
      {showContent &&
        matzipInfo.map((el) => (
          <Card
            title={el.title}
            imgSrc={el.imgSrc}
            desc={el.desc}
            key={el.idx}
          ></Card>
        ))}
    </>
  );
}
