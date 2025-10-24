const input = require("prompt-sync")();
let n = parseInt(input("Enter the size of array: "));

let arr = [];
for (let i = 0; i < n; i++) {
  let num = parseInt(input("Enter the value : "));
  arr.push(num);
}
let even = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even++;
  }
}
console.log("Number of even values are : " + even);
