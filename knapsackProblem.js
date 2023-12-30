function knapsackProblem(items, capacity) {
  let knapsackMatrix = [];
  for (let rowIndex = 0; rowIndex < items.length + 1; rowIndex++) {
    const row = new Array(capacity + 1).fill(0);
    knapsackMatrix.push(row);
  }

  for (let itemIndex = 1; itemIndex < items.length + 1; itemIndex++) {
    let currentItemWeight = items[itemIndex - 1][1];
    let currentItemValue = items[itemIndex - 1][0];

    for (
      let currentCapacity = 0;
      currentCapacity < capacity + 1;
      currentCapacity++
    ) {
      if (currentItemWeight > currentCapacity) {
        knapsackMatrix[itemIndex][currentCapacity] =
          knapsackMatrix[itemIndex - 1][currentCapacity];
      } else {
        knapsackMatrix[itemIndex][currentCapacity] = Math.max(
          knapsackMatrix[itemIndex - 1][currentCapacity],
          knapsackMatrix[itemIndex - 1][currentCapacity - currentItemWeight] +
            currentItemValue
        );
      }
    }
  }
  return [
    knapsackMatrix[items.length][capacity],
    getSelectedItems(knapsackMatrix, items),
  ];
}

function getSelectedItems(knapsackMatrix, items) {
  const selectedItems = [];
  let itemIndex = knapsackMatrix.length - 1;
  let currentCapacity = knapsackMatrix[0].length - 1;

  while (itemIndex > 0) {
    if (
      knapsackMatrix[itemIndex][currentCapacity] ==
      knapsackMatrix[itemIndex - 1][currentCapacity]
    ) {
      itemIndex -= 1;
    } else {
      selectedItems.unshift(itemIndex - 1);
      currentCapacity -= items[itemIndex - 1][1];
      itemIndex -= 1;
    }
    if (currentCapacity == 0) {
      break;
    }
  }
  return selectedItems;
}

// Example usage:
const inputItems = [
  [60, 5],
  [50, 3],
  [70, 4],
  [30, 2],
];
const inputCapacity = 5;

const knapsackResult = knapsackProblem(inputItems, inputCapacity);
console.log(knapsackResult);
