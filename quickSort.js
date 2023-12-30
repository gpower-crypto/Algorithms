function quickSort(array) {
  return QuickSort(array, 0, array.length - 1);
}

function QuickSort(array, low, high) {
  if (low < high) {
    var pos = partition(array, low, high);

    console.log(array);

    QuickSort(array, low, pos - 1);
    QuickSort(array, pos + 1, high);
  }
  return array;
}

function partition(array, low, high) {
  var pivot = array[high];
  var i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
