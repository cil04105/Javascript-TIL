// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers); //그대로

// let sum = numbers.map((number) => number + 2);
// console.log(sum); //[3, 4, 5, 6, 7, 8] _ map은 새로운 배열을 저장하고 리턴함

// ------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.forEach((number) => number + 2);
console.log(sum); //undefined _ forEach는 리턴값을 버리고 undefined를 리턴한다.
