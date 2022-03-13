//변수? 자료를 임시로 저장하는 공간(선언, 할당, 범위)

//재선언, 재할당 가능 / function 안에서만 사용 가능
var name = "Lee";
var name = "Park"; //재할당 가능(값 변경)

function 함수() {
  var name = "Kim";
}

//let, const 는 거의 모든 중괄호 안에서 사용 가능
let name = "Lee";
const name = "Lee"; // 재선언, 재할당 불가능(상수)

/*정리*/
// var 는 재선언 재할당이 가능하다.
// let 과 const 는 재선언이 불가능하고 재선언 시 에러가 발생하여 중복을 방지할 수 있다.
// let 은 재할당이 가능하지만 const는 상수이기 때문에 재할당이 불가능하다.
