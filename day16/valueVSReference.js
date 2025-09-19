/*
let fridge = [1, 2, 3];
//shallow copy because reference type like(array, object).
let refrigerator = fridge;
console.log(fridge);
console.log(refrigerator);
fridge.pop();
console.log("after removing");
console.log(fridge);
console.log(refrigerator);

let a = 5;
let b = a;
a = a + 5;
console.log(a); //10
console.log(b); //5
*/

let fridge = {
  coldDrinks: "CocaCola",
  juice: "Apple",
};
let refrigerator = fridge;
console.log(fridge);
console.log(refrigerator);
fridge.juice = "Orange";
console.log("after checking...");
console.log(fridge);
console.log(refrigerator);
