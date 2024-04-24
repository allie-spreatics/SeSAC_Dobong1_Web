import { selector } from 'recoil';
import { v1 } from 'uuid';
import { borderWidthState } from '../atom/borderWidthState';
import { borderColorState } from '../atom/borderColorState';

export const borderSelector = selector({
  key: `borderSelector/${v1()}`, // selector가 갖는 고유한 key
  get: ({ get }) => {
    // get()메서드를 통해 atom의 값을 가져올 수 있음.
    const borderWidth = get(borderWidthState);
    const borderColor = get(borderColorState);

    // border state는 number type으로 연산을 할 수 있지만,
    // border selector를 이용해서 다른 값을 return 할 수 있음
    return `${borderWidth}px solid ${borderColor}`;
  },
});
