let a = "Hello World";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.toLocaleUpperCase());
console.log(a.slice(1, 3)); //el
console.log(a.slice(-5, -1)); //worl
console.log(a.substring(1, 3)); //same as slice but not take -ve values as 0
console.log(a.substr(2, 5)); //deprecated
console.log(a.length); //11
console.log(a.charAt(1)); //e

for (let i = 0; i < a.length; i++) {
  //iterating
  console.log(a[i]);
}

console.log(a.indexOf("Wo")); //find values or not found return -1
console.log(a.lastIndexOf("W"));

let arr1 = a.split(""); //convert string into array character wise
console.log(arr1);
let arr2 = a.split(" "); //convert string into array string wise
console.log(arr2);

// repeat
let str = "tapas           ";
console.log(str.repeat(5)); //5 times repeat
console.log(str.split("").reverse().join(""));
console.log(str.trim());
