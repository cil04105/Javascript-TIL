// //일반 함수
// function sum(num) {
//   return 10 + num;
// }
// console.log(sum(10));

// //화살표 함수
// let sum = (num) => {
//   return 10 + num;
// };
// console.log(sum(10));

// /** 장점 **/
// //가독성이 좋아진다
// //인자가 하나면 () 생략 가능
// //중괄호 안에 return 이 한줄이면 return 생략 가능
// let sum = (num) => 10 + num;
// sum(10);

//화살표 함수 안에서 this 값 사용 시 외부 this 값을 그대로 사용 가능
//1. 화살표 함수
let obj = {
  함수: () => {
    console.log(this);
  },
};
obj.함수(); // 외부 window 출력됨

//일반 함수
let obj = {
  함수: function () {
    console.log(this);
  },
};
obj.함수(); //함수()를 가지고 있는 obj 출력됨
