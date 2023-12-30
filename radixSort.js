function radixSort(array) {
  var n = array.length;
  if (n == 0) {
    return [];
  }
  var maxVal = findMax(array);

  // loop for as many digits there are in the max
  // value in the array (units, tenths, hundredths, ...,etc.)
  for (var i = 1; Math.floor(maxVal / i) > 0; i *= 10) {
    console.log(i);
    countSort(array, n, i);
  }
  return array;
}

function countSort(array, n, digit) {
  // Array(10) as there are only 10
  // possible digits in the decimal system (0-9)
  var count = new Array(10);
  var i; // loop index
  var finalArr = new Array(n); // store the output array

  // store the array count with zeroes
  for (i = 0; i < 10; i++) {
    count[i] = 0;
  }

  // store the count of the elements of array in count
  for (i = 0; i < n; i++) {
    count[Math.floor(array[i] / digit) % 10]++;
  }

  // store the actual position of the digit in the output array
  for (i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // store the array elements in the correct order in the output array
  for (i = n - 1; i >= 0; i--) {
    finalArr[count[Math.floor(array[i] / digit) % 10] - 1] = array[i];
    count[Math.floor(array[i] / digit) % 10]--;
  }

  // run through the output array and store in array
  for (i = 0; i < n; i++) {
    array[i] = finalArr[i];
  }
  return array;
}

function findMax(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
  return max;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
