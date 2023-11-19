function bubbleSort(array) {
  n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temporary = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporary;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

module.exports = bubbleSort;
