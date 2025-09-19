/*
//spread operator only gives deep copy when do not have nested array or object.
let fridge = [1, 2, 3, 4, 5, 6, [7, 8, 9]];
//spread operator used to spread the values.
let refrigerator = [...fridge]; // [1, 2, 3, 4, 5, 6, arr[6]]
// fridge.pop();
fridge[2] = 112; //deep copy not impact because of value type
fridge[6][2] = 10; //wil impact because of ref type
console.log("after updating fridge");
console.log(fridge);
console.log(refrigerator);
*/

// Object.parse and object.json:
let arr = [1, 2, 3];
console.log(typeof arr);
let str = JSON.stringify(arr); //array or object convert to string
console.log("array in string form");

let arrCopy = JSON.parse(str); //string convert to array or string
console.log(typeof arrCopy);
console.log("string in array form");
