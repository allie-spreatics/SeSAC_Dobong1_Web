// 모듈 사용 - import 키워드를 이용
import { flr , getFlr } from './04_export1.js';
import * as flowers from './04_export1.js';
console.log(flr);
console.log(getFlr(2))
console.log(getFlr(3))

console.log(flowers)
console.log(flowers.flr)
console.log(flowers.getFlr(1))

import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

import sayHi from './05_exportdefault.js';
sayHi();