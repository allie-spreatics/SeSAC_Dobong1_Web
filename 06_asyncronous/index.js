/* 
    setTimeout(()=>{},시간초)
    시간의 단위는 ms
    설정한 시간 이후에 함수 내부에 있는 코드가 동작
*/

// 편의점에서 들어가서 음료수를 사서 나오는 상황
// setTimeout(() => {
//   console.log("setTimeout 사용해보기");
// }, 3000);
let product, price;
function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민..");
}
function pickDrink() {
  // 3초동안 고민
  setTimeout(() => {
    console.log("고민 끝~");
    product = "콜라";
    price = 2000;
  }, 3000);
}
function pay() {
  console.log(`상품명: ${product}, 가격:${price}`);
}

goMart();
pickDrink();
pay();
