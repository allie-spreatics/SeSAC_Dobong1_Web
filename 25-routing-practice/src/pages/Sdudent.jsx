import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
//   스타일
const DivContainer = styled.div`
  width: 100%;
  background-color: greenyellow;
  height: 100px;
`;
const Span1 = styled.span`
  color: blue;
  font-weight: 700;
`;
const Span2 = styled.span`
  color: red;
  font-weight: 700;
`;

export default function Student() {
  const { name } = useParams();
  const [nameParams] = useSearchParams();
  const qeuryName = nameParams.get("name");
  const navigate = useNavigate();

  return (
    <DivContainer>
      <p>
        학생 이름은 <Span1>{name}</Span1> 입니다.
      </p>
      {qeuryName && (
        <p>
          실제 학생 이름은 <Span2>{qeuryName}</Span2>입니다.
        </p>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </DivContainer>
  );
}
