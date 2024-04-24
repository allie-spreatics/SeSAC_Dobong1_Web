import { atom } from 'recoil';
import { v1 } from 'uuid';

export const borderWidthState = atom({
  key: `borderWidthState/${v1()}`,
  default: 1, // 1px
});
