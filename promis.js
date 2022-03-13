// 코드 디자인 패턴
// 성공, 실패를 판정해주는 문법
// 프로미스가 성공일 경우 실행

// let prm = new Promise(function (resolve, rejecte) {
//   let data = "Hello world";
//   resolve(data);
// });

// prm
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("실패");
//   });

//5초 후 실행되는 코드
//콘솔창에 prm 입력하면 상태 확인 가능
let prm = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log(1);
    let data = "Hellow World"; //pending
    resolve(data); //resolved
    console.log(2);
  }, 5000); // 비동기처리 x 그냥 5초 동안 브라우저 멈춤
});

prm
  .then((data) => {
    console.log(`${data}`);
  })
  .catch(() => {
    console.log("실패");
  });

// 정리
//자바스크립트에서 비동기적 처리를 간편하게 처리할 수 있도록 도와주는 오브젝트
//상태

//순차적 실행을 위해 콜백함수 대신 쓸 수 있는 코딩 패턴
//콜백 함수 디자인 패턴이 복잡해서 생겨난 디자인 패턴(동기적 처리를 비동기 처리로 바꾸는게 아니다)
//그냥 콜백함수 디자인 중에 하나임
