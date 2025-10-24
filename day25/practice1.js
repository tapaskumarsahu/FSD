// let arr = [1, 9, 8, 6, 7, -3, 5, -6];
// let subarr_size = 2; // you can change this
// let maxsum = -Infinity; // handles negative numbers too

// for (let i = 0; i <= arr.length - subarr_size; i++) {
//   let sum = 0;

//   for (let j = 0; j < subarr_size; j++) {
//     sum += arr[i + j];
//   }

//   if (sum > maxsum) {
//     maxsum = sum;
//   }
// }

// console.log(maxsum);

function maxSum(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  return sum;
}
let arr = [6, 9, 3, 8, 4, -1, -6, 9, 9, 8];
let k = 3;
console.log(maxSum(arr, k));
