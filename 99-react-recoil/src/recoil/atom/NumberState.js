import { atom } from 'recoil';
import { v1 } from 'uuid';

export const numberState = atom({
  key: `numberState/${v1()}`,
  default: 0,
});
