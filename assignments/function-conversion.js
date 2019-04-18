// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };

let myFunction = () => 'Function was invoked!';
console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => param;
console.log(anotherFunction('happy'));
console.log(anotherFunction(9));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => param1 + param2;
console.log(add(4,5));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => param1 - param2;
console.log(subtract(10,3));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
