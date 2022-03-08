//this ?? 나를 담고 있는 객체를 출력해줘
function 함수() {
  console.log(this);
}
함수();
window.함수(); // 같은 뜻 _ 함수()가 포함된 window 출력해라

//2. 객체 안에 있는 함수 안에서 this 사용하면 그 함수를 가지고 있는 객체 를 뜻함
let obj = {
  name: "Kim",
  함수: function () {
    console.log(this);
  },
};
obj.함수(); // obj 출력됨

//3. 화살표 함수 안에서 this 사용하면 외부 this값(window) 출력됨
let obj = {
  함수: () => {
    console.log(this);
  },
};
obj.함수(); // window 출력

//정리
//일반 함수 내부에서 this = window
//window? 전역 변수 보관소 / javascript 기본 함수를 가지고있음
//전역 함수, 전역 변수 만들면 자동으로 window{객체}안에 담긴다.
