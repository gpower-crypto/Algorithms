function searchForRange(array, target) {
  var firstIdx = -1;
  var secondIdx = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      if (firstIdx == -1) {
        firstIdx = i;
      }
      secondIdx = i;
    }
  }

  return [firstIdx, secondIdx];
}

// Example usage:
const array = [1, 2, 2, 3, 4, 4, 4, 5];
const target = 4;

const result = searchForRange(array, target);
console.log(result);
