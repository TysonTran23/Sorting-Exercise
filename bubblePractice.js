// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log(arr);
//   }
// }
// function bubbleSort2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       console.log(arr);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log(arr);
//   }
// }
function bubbleSort3(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}
