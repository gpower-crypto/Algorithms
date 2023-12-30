function nonAttackingQueens(n) {
  var array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = new Array(n).fill(0);
  }
  //   console.log(array);

  let possibleCases = [];

  nQueens(0, possibleCases, array, n);
  return possibleCases.length;
}

function nQueens(row, possibleCases, array, n) {
  if (row >= n) {
    possibleCases.push([...array]);
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isSafe(row, col, array, n)) {
      array[row][col] = 1;
      nQueens(row + 1, possibleCases, array, n);
      array[row][col] = 0;
    }
  }
}

function isSafe(row, col, array, n) {
  // check for the upper column
  let k = row;
  while (k >= 0) {
    if (array[k][col] == 1) {
      return false;
    } else k--;
  }
  // left diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (array[i][j] == 1) {
      return false;
    }
  }

  // right diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (array[i][j] == 1) {
      return false;
    }
  }

  return true;
}

// Example usage:
const n = 4;
const result = nonAttackingQueens(n);
console.log(result);
