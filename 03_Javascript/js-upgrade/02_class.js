// class : 오브젝트를 만들 수 있는 틀!

/* 
 속성
  - 만들어진 연도 year
  - 집의 이름 name
  - 창문의 갯수 window
 메소드
  - 건물의 나이 출력 getAge()
  - 창문의 개수 출력 getWindow()
*/

class House {
	constructor(year, name, window) {
		this.name = name;
		this.year = year;
		this.window = window;
	}

	// 메소드
	getAge() {
		console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
	}

	getWindow() {
		console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
	}
}

// const h1 = {
// 	name: "old",
// 	year: 1789,
// 	window: 1,
// 함수 ~~~
// };

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();

console.log("--------상속----------");
// extends키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
	constructor(year, name, window, floor, windowMaker) {
		super(year, name, window);
		this.floor = floor;
		this.windowMaker = windowMaker;
	}

	getAptInfo() {
		return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
	}

	// overriding
	// 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
	// 내용은 다르게 만들고 싶을 때, 메소드 재선언
	getWindow() {
		return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`;
	}

	// getAge() << 상속받아서 사용 가능
}

// year, name, window, floor, windowMaker
const ap1 = new Apartment(2022, "raemian", 19, 50, "KCC");
console.log(ap1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log("**********");

console.log(ap1.getAptInfo()); // 새로운 메소드 정의
ap1.getAge(); //부모 메소드 그대로 상속
console.log(ap1);

/* 실습1 
Shape 클래스 만들기
가로, 세로 속성(number)
넓이 구하는 메소드(return) */
class Shape {
	constructor(width, height) {
	  this.width = width;
	  this.height = height;
	}
  
	getArea() {
	  return this.width * this.height;
	}
  }
  
  let rec1 = new Shape(3, 4);
  console.log(rec1.getArea());
/* 선택 실습. 상속 이용 */
// 1. Rectangle 클래스
class Rectangle extends Shape {
	// constructor(width, height) {
	//   super(width, height);
	// } -> 상속받을거지만 속성 추가하지 않는다면 굳이 없어도 됨
	getDiagonal() {
	  return Math.sqrt(this.width ** 2 + this.height ** 2);
	}
  }
  
  // 2. Triangle 클래스
  class Triangle extends Shape {
	// 오버 라이딩
	getArea() {
	  return (this.height * this.width) / 2;
	}
  }
  
  // 3. Circle 클래스
  // circle class 같은 경우에는 사실은 width,height 는 필요없어서
  // 클래스 자체를 새로 만드는게 나을 수도 있지만
  // Shape 중의 하나라는 의미 + 상속 연습 해보기
  class Circle extends Shape {
	constructor(width, height, circle) {
	  super(width, height);
	  this.circle = circle;
	}
	getArea() {
	  return this.circle ** 2 * Math.PI;
	}
  }
  let rec = new Rectangle(6, 8);
  let tri = new Triangle(6, 8);
  let circle = new Circle(1, 1, 5);
  console.log('사각형 넓이' + rec.getArea());
  console.log('대각선 길이' + rec.getDiagonal());
  
  console.log('삼각형 넓이' + tri.getArea());
  console.log('원 넓이' + circle.getArea());
  