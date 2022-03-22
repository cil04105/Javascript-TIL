//callback :: 함수 안에 들어가는 함수는 전부 callbeck 함수

console.log(1);
console.log(2);
setTimeout(function () {
  console.log(3);
}, 4000);
console.log(4);
console.log(5);
