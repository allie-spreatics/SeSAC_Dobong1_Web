// Tuple
// 튜플: 개수와 데이터 타입의 순서가 정해져있는 배열

let drink: [string, string] = ["a", "b"];

let drink2: [string, string, number];
drink2 = ["cola", "콜라", 1];
// console.log(drink2);
// console.log(drink2[0]);
// console.log(...drink2);

drink2.push("push되나요?");
// console.log(drink2); // push 됩니다!
drink2[0] = "사이다";
// typescript의 type 추론
/* 
네번째 데이터 타입은 미리 선언되어 있지 않지만,
string, number 로만 이루어진 튜플을 선언했기 때문에
타입스크립트가 자동으로 타입을 추론해서 결정함 (string|number)[]
*/
// drink2.push(null)

// readonly: 길이를 특정하고 싶을 때,
let drink3: readonly [string, number] = ["cola", 2000];
// drink3[0] = "cider"; // 수정 불가
// drink3.push("push 되나요?"); // 수정 불가

// ----------------enum---------------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}

// console.log(Auth.admin);
// console.log(Auth.user);

// console.log(Cafe.americano);
// console.log(Cafe.latte);
// Cafe.user = 3; // enum은 선언하고 나면 변경할 수 없습니다.

enum Cake {
  choco, // 0
  vanilla, //1
  strawberry, //2
  kiwi = "kiwi", //kiwi
}
// console.log("--------------");
// console.log(Cake.choco);
// console.log(Cake.vanilla);
// console.log(Cake.strawberry);
// console.log(Cake.kiwi);

// 실습문제
let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

console.log("----");
// olimpic_newgame[1] = false;

// --------------interface & type---------
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "allie",
  isPassed: true,
};

type Score = "A+" | "A" | "B+" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  position: string;
  height: number;
  weight: number;
  readonly backNumber?: number; // 필수값이 아님: ? 처리
  [grade: number]: Score; // key가 숫자형인게 여러 개 올 수 있다.
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: "A+",
};

// otani.backNumber = 15; //readonly 수정 불가
otani.isPassed = false;
otani["2"] = "B+";
console.log(otani);

const junghoo: 야구부 = {
  name: "이정후",
  isPassed: true,
  position: "hitter",
  weight: 88,
  height: 185,
};

console.log(junghoo);

// interface - 함수의 타입 설정
interface Calc {
  (a: number, b: number): number;
}

const sum: Calc = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(1, 2));

interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차 타입: 모든 타입을 만족해야 합니다!
const toyCar: Toy & Car = {
  name: "타요",
  color: "blue",
  price: 50000,
  start() {
    console.log(`${this.name}의 가격은 ${this.price}입니다.`);
  },
};

toyCar.start();

// 2. type
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};
type Gender = "Female" | "Male";

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person2 = {
  name: "다니엘",
  gender: "Female",
  age: 20,
};

// daniel.gender = "여성";
// daniel.gender = "female";
console.log(daniel);

let c: Person2 = {
  name: "a",
  age: 20,
  gender: "Male",
};
