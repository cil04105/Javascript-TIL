//async 사용하면 함수 자체가 promise
async function sum() {
  return 1 + 1;
}
//then 사용 가능
sum.then((resolve) => console.log(resolve));
