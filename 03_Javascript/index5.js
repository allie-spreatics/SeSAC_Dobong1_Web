/* 1. if 문 */
/* if(조건식){ // 조건이 참일 때 실행할 문장 } */
if(5 > 3) console.log('5가 3보다 커요');

// let number =prompt('숫자 입력');
// number = Number(number);


let number = 88;

/* if ~ else */
if(number > 10){
    console.log('숫자가 10보다 큽니다.');
}else{
    alert('10보다 작거나 같아요');
}

/* if ~ else if ~ else */
if(number >10){
    console.log('10보다 큽니다.');
} else if(number === 10){
    console.log('10입니다.');
}else{
    console.log('10보다 작습니다.');
}

/* 2. switch~case문
    - switch의 괄호안과 case의 조건에는 비교식이 들어가지 않음,
      값 자체가 들어감
    - 자바스크립트에선 조건이 많을 때 switch를 쓰는게 근소하게 성능에 유리함
*/
let a = 4;
switch(a){
    case 3:
        console.log('3입니다.');
        break;
    case 4:
        console.log('4입니다.');
        break;
        // break를 써주지 않으면, case 4를 출력하고 싶을 때,
        // case 5까지 모두 실행됨 (스코프{중괄호} 에서 빠져나가지 못함)
    case 5:
        console.log('5입니다.');
        break;
    default:
        console.log('어떤 값인지 모르겠어요');
        break;
}
/*
if문으로 
90<= A <= 100
80<= B < 90
70<= C < 80
60<= D < 70
F< 60
*/

let score = 74;
if(score > 100 || score < 0){
    console.log('잘못된 점수입니다.')
}else if (score >=90){
    console.log('A')
}else if (score >=80){
    console.log('B')
}else if (score >=70){
    console.log('C')
}else if (score >=60){
    console.log('D')
}else{
    console.log('F')
}

// switch로 성적 판별
// 무조건 0 ~ 100까지만 들어옵니다.
// score를 10으로 나눈 결과의 몫으로만 판별
console.log(parseInt(score/10))
switch(parseInt(score/10)){
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
}

/* 3. 삼항연산자 */
// 조건식 ? 조건식이 true일 떄 : 조건식이 false일 때
let num = 2;
if(num % 2===1){
    console.log('홀수');
}else {
    console.log('짝수');
}

num % 2===1?console.log('홀수'):console.log('짝수');
console.log(new Date().getHours());

const now =new Date().getHours();
