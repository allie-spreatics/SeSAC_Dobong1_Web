import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { borderColorState } from '../recoil/atom/borderColorState';
import { borderWidthState } from '../recoil/atom/borderWidthState';
import { borderSelector } from '../recoil/selector/borderSelector';

export default function Border() {
  const setBorderWidth = useSetRecoilState(borderWidthState);
  const [borderColor, setBorderColor] = useRecoilState(borderColorState);

  const borderStyle = useRecoilValue(borderSelector);

  const plusBorderWidth = () => {
    setBorderWidth((prevW) => prevW + 1);
    console.log(borderStyle);
  };
  const minusBorderWidth = () => {
    setBorderWidth((prevW) => prevW - 1);
  };

  const changeBorderColor = (e) => {
    setBorderColor(e.target.value);
  };
  return (
    <>
      <h1>selector 사용해보기</h1>
      <div
        style={{
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: borderStyle, // 적용되는 것은 selector에서 리턴되는 state
        }}
      >
        this is box
      </div>
      <button onClick={plusBorderWidth}>border+1</button>
      <button onClick={minusBorderWidth}>border-1</button>
      <input type="color" onChange={changeBorderColor} value={borderColor} />
    </>
  );
}
