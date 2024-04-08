function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// call -> back -> hell 순서로 실행
call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는 " + message);
    });
  });
});

// -----------------(아래부터 실습)-----------------
// 함수 Promise 객체 리턴할 수 있도록 새로 선언
function callPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("callback hell");
    }, 1000);
  });
}

// 1. promise then으로 실행
callPromise("allie") // callPromise 의 결과가
  .then((result) => {
    console.log(result + "반가워");
    // 리턴의 결과가 다음 then의 parameter로 들어감
    return backPromise();
  })
  .then((txt) => {
    console.log(txt + "를 실행했구나");
    return hellPromise();
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  });

// 2. async await 로 실행
async function asyncF() {
  //resolve혹은 reject의 결과가 반환되어 변수에 저장됨
  let name = await callPromise("allie");
  console.log(name + "반가워");
  let back = await backPromise();
  console.log(back + "을 실행했구나");
  let hell = await hellPromise();
  console.log("여기는" + hell);
}

asyncF(); //함수 호출!!
