//higher order functions works on array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter((e) => e % 2 == 0);
console.log(even);

//map: higher order functions, it is used when you want to update or access each value
let user = ["tapas", "manas", "vijay", "Raman"];
let updateUser = user.map((e) => (e = e + " kumar"));
console.log(updateUser);
let square = arr.map((s) => (s = s * s));
console.log(square);

//reduce: when you want to convert your complete array in single values
let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((val, acc) => val * acc, 1); //accumulator means store previous values
console.log(sum);
