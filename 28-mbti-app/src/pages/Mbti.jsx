import { useDispatch, useSelector } from "react-redux";
import SkyblueButton from "../components/SkyblueButton";
import styled from "styled-components";
import { check, next } from "../store/module/mbti";
import Progress from "../components/Progress";

const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1.5rem;
`;
export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  console.log(survey);
  //[{question, answer:[{text, result}]},{question, answer:[{text, result}]}]
  const page = useSelector((state) => state.mbti.page); // 1
  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <>
              <li key={index}>
                <SkyblueButton
                  text={el.text}
                  clickEvent={() => {
                    dispatch(next());
                    dispatch(check(el.result));
                  }}
                />
              </li>
              {index === 0 && <Vs>VS</Vs>}
            </>
          );
        })}
      </ul>

      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
