const obj = `{
    "model": "아이오닉",
    "price":50000000,
    "isElectric":true,
    "option":["사이드미러","스마트 스크린"]
}`;
console.log(obj);
console.log(typeof obj);
console.log(obj.model); //undefined

// JSON.parse(실제 제이슨 데이터) : json > object
const carInfo = JSON.parse(obj);
console.log("********OBJECT*********");
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

// JSON.strigify(객체) : object > json
console.log("********JSON*********");
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
const carJson2 = JSON.stringify(carInfo, null, 5);
console.log("json2", carJson2);
console.log(carJson2.model); //undefined
