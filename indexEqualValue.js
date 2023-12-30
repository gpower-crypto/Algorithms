function findIndexEqualsValue(array) {
  return findIndexEqualsValueHelper(array, 0, array.length - 1);
}

function findIndexEqualsValueHelper(array, low, high) {
  if (low > high) return -1;

  let middleIdx = Math.floor((low + high) / 2);
  let middleVal = array[middleIdx];

  if (middleVal < middleIdx) {
    return findIndexEqualsValueHelper(array, middleIdx + 1, high);
  } else if (middleIdx === middleVal && middleIdx === 0) {
    return middleIdx;
  } else if (middleIdx === middleVal && array[middleIdx - 1] < middleIdx - 1) {
    return middleIdx;
  } else {
    return findIndexEqualsValueHelper(array, low, middleIdx - 1);
  }
}

// Example usage:
const exampleArray = [-10, -5, 0, 3, 7, 9, 12, 17];
const result = findIndexEqualsValue(exampleArray);
console.log(result);
