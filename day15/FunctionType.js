// function declaration:
function add(a, b) {
  console.log(a + b);
}

// function expression:
let sum = function (a, b) {
  console.log(a + b);
};

//arrow function:
let addition = (a, b) => console.log(a + b);

add(10, 15);
sum(23, 34);
addition(12, 13);

//practice:
let mul = function (a, b) {
  return a * b;
};
let devideByFive = function (a) {
  return a / 5;
};
let devideByTwo = (a) => a / 2;
let multipliction = mul(5, 10);
console.log(devideByFive(multipliction));
console.log(devideByTwo(multipliction));
