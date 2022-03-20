//문자를 다룰 떄 쿼트 대신 '백틱' 사용
//문자 중간에 엔터 키 사용 가능
const myName = "Kim";
let temp = `안녕하세요 ${myName} 입니다`;

//함수() 대신 함수`${}`
// var 변수 = "손흥민";
// var 변수2 = "박지성";
let myName2 = "Park";

function template(str, variable) {
  console.log(str[1] + myName2 + str[0]);
}

//중괄호를 기준으로 왼쪽 오른쪽에 있는 문자를 분리 후 문자에 담는다
template`안녕하세요 ${myName} 입니다`;
