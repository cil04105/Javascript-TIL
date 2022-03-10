// 코드 디자인 패턴
// 성공, 실패를 판정해주는 문법
// 프로미스가 성공일 경우 실행

let prm = new Promise(function (resolve, rejecte) {
  let data = "Hello world";
  resolve(data);
});

prm
  .then((data) => {
    console.log(data);
  })
  .catch(function () {
    console.log("실패");
  });

//5초 후 실행되는 코드
//콘솔창에 prm 입력하면 상태 확인 가능
let prm = new Promise((resolve, reject) => {
  setTimeout(function () {
    let data = "Hellow World"; //pending
    resolve(data); //resolved
  }, 5000);
});

prm
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("실패");
  });

// 정리
//콜백 함수 디자인 패턴이 복잡해서 생겨난 디자인 패턴(동기적 처리를 비동기 처리로 바꾸는게 아니다)
//그냥 콜백함수 디자인 중에 하나임
