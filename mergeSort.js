function mergeSort(array) {
  // base case
  if (array.length === 1) {
    return array;
  }

  const midIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midIdx);
  const rightHalf = array.slice(midIdx);

  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf) {
  const sortedArray = [];
  let k = 0,
    i = 0,
    j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      sortedArray[k] = leftHalf[i];
      i++;
    } else {
      sortedArray[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftHalf.length) {
    sortedArray[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rightHalf.length) {
    sortedArray[k] = rightHalf[j];
    j++;
    k++;
  }

  return sortedArray;
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
