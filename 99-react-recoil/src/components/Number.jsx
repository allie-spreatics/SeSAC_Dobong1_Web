import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { numberState } from '../recoil/atom/NumberState';

export default function Number() {
  // useRecoilState의 인자로는
  // 특정 atom이 들어갑니다.
  // 이때 state와 state setter함수의 이름은 자유롭게 지어도 됨
  const [number, setNumber] = useRecoilState(numberState);

  //   useRecoilValue와 useSetRecoilState의 인자역시 특정 atom을 전달
  const getNumber = useRecoilValue(numberState); // state만
  const setterNumber = useSetRecoilState(numberState); // setter만 가져옴

  // 초기화를 위한 훅
  const resetNumber = useResetRecoilState(numberState);
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setterNumber(getNumber - 1);
  };

  const reset = () => {
    resetNumber(); // 초기화
  };
  return (
    <>
      <h2>number값 변경하기1</h2>
      <p>useRecoilState를 이용해서, state와 setter 동시에 가져오기</p>
      <h4>NumberState: {number}</h4>
      <button onClick={plus}>+1</button>
      <hr />
      <h2>number값 변경하기2</h2>
      <p>
        useRecoilValue와 useSetRecoilState를 이용해서, getNumber와 setter함수를 따로
        가져오기
      </p>
      <h4>NumberState: {getNumber}</h4>
      <button onClick={minus}>-1</button>
      <hr />
      <button onClick={reset}>Number default로 초기화</button>
    </>
  );
}
