//Spread Operrator
let arr = ["hello", "hi"];
console.log(...arr); //hello hi

let string = "hello world";
console.log(...string); //'h' 'e' 'l' 'l' 'o' 'w' 'o' 'r' 'l' 'd'

//배열을 합치거나 복사할때 사용
let a = [1, 2, 3];
let b = [4, 5];

let c = [...a, ...b];
console.log(c); // [1, 2, 3, 4, 5]

//배열 복사하기(deep copy)
let a = [1, 2, 3];
let b = a; // 그냥 복사하면 값을 공유함
let c = [...a]; // spread 연신자 사용하면 독릭적인 값을 가진다.

//오브젝트도 사용 가능
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
let obj3 = { ...obj1, a: 3, b: 4 };
console.log(obj3); // 값 중복 시 뒤에 있는 값으로 적용됨

//정리
//배열이나 객체를 독릭적으로 사용할 수 있게 복사해주는 문법
//...은 함수(), {}, [] 안에서만 사용 가능하다.
//배열에서 대괄호 제거
//문자는 하나씩 펼쳐준다
//arr,obj reference data type 이기 때문에 그냥 복사 하면 값 공유가 발생
