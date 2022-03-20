// let a = {};
// console.log(a);

// function 기계() {
//   this.이름 = "kim"; //새로 생성되는 오브젝트(인스턴스)
//   console.log(this);
// }
// 기계();

// let 오브젝트 = new 기계();

let arr = [1, 2, 3, 4, 5];

let obj = {
  이름들: ["김", "이", "박"],
  함수: () => {
    obj.이름들.forEach(() => {
      // console.log(i);
      console.log(this);
    });
  },
};

obj.함수();
