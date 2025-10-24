function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
let arr = [5, 9, 4, 2, 6, 8];
console.log(`before sorting: ${arr}`);
bubble(arr);
console.log(`after sorting: ${arr}`);

function bubble_sort(ar) {
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = 0; j < ar.length - 1 - i; j++) {
      if (ar[j] > ar[j + 1]) {
        let temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
}
let ar = [6, 7, 2, 4, 9, 5];
console.log(`before sorting: ${ar}`);
bubble_sort(ar);
console.log(`after sorting: ${ar}`);
