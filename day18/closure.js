// function add() {
//   let a = 6; //lexical scope
//   let b = 5;
//   return a + b;
// }
// console.log(add());
// closure: it is a behavour of js which allow us to use the properties of function out of its lexical scope
function add() {
  let a = 6;
  let b = 5;
  return function print() {
    //child property
    console.log(a + b);
  };
}
let abc = add();
abc();
// example 2:
function parent() {
  let money = 10000;
  return function child() {
    let cMoney = 12000;
    console.log(money + cMoney);
  };
}
let total = parent();
total();
