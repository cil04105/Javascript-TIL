//Prototype 으로 상속(프로퍼티 6개 생성)
function student(name) {
  this.name = name;
  this.age = 18;
}

student.prototype.gender = "male"; //prototype 안에 값 추가하기
student.prototype.language = "korean";

let student1 = new student("Kim");
let student2 = new student("Lee");

// --------------------------------------------------

//그냥 상속(프로퍼티 8개 생성)
function student(name) {
  this.name = name;
  this.age = 18;
  this.gender = "mail";
  this.language = "korean";
}

let student1 = new student("Kim");
let student2 = new student("Lee");
