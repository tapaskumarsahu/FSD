function bubble_sort() {
  for (let i = 0; i < arr.length - 1; i++) {
    //outer loop
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //inner loop
      if (arr[j] > arr[j + 1]) {
        //condition check after swap the values in temp array
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
let arr = [5, 3, 6, 8, 2, 0, 1];
console.log(`Before sorting: ${arr}`);
bubble_sort(arr); //calling func
console.log(`After sorting: ${arr}`);
