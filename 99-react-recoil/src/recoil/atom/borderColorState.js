import { atom } from 'recoil';
import { v1 } from 'uuid';

export const borderColorState = atom({
  key: `borderColorState/${v1()}`,
  default: '#000000', // 테두리의 색상값
});
