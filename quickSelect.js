function quickselect(array, k) {
  return KthSmallestElement(array, 0, array.length - 1, k);
}

function KthSmallestElement(array, l, h, k) {
  // array length is one
  if (l == h) return array[l];

  let pos = partition(array, l, h);

  if (pos == k - 1) return array[pos];
  else if (pos > k - 1) return KthSmallestElement(array, l, pos - 1, k);
  else return KthSmallestElement(array, pos + 1, h, k);
}

function partition(array, l, h) {
  let pivot = array[h];
  let i = l - 1;

  for (let j = l; j < h; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, h);
  return i + 1;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// Example usage:
const array = [3, 1, 4, 4, 2, 2, 6];
const k = 3;
const kthSmallest = quickselect(array, k);
console.log(kthSmallest);

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
const target = 4;
const range = searchForRange(array, target);
console.log(range);
