let str1, str2, str3;

str1 = 100;
str2 = 200;
str3 = "hello";

let result = str1 + str2 + str3;
let result1 = 'str1 + str2 + str3';
let result2 = `${str1 + str2 + str3}`;
let result3 = `${str1 + str2} hello`;
// 문자와 결합하여 사용할땐 리터럴 기호 쓰는게 더 가독성 좋음
// ` = TAB키 위

let arr = [str1, str2, str3];
// 배열로 만들면 함수를 활용할 수 있음

console.log('result is ' + result);
console.log('result1 is ' + result1);
console.log('result2 is ' + result2);
console.log('result3 is ' + result3);
console.log('result3 is ' + arr);
console.log(arr); //속성:값 순으로 나열

/////////////

