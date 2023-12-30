function dijkstrasAlgorithm(startNode, adjacencyList) {
  const numberOfNodes = adjacencyList.length;

  // Initialize the array to store the minimum distances from the startNode
  const minDistances = Array.from({ length: numberOfNodes }, () => Infinity);
  // Distance from startNode to itself is 0
  minDistances[startNode] = 0;

  // Set to keep track of visited nodes
  const visitedNodes = new Set();

  // Visit all the nodes one by one
  while (visitedNodes.size !== numberOfNodes) {
    // Find the node with the minimum distance
    const [currentNode, currentMinDistance] = findNodeWithMinDistance(
      minDistances,
      visitedNodes
    );

    // If all remaining nodes are unreachable, break the loop
    if (currentMinDistance === Infinity) {
      break;
    }

    // Add the new min node to the set of visited nodes
    visitedNodes.add(currentNode);

    // Explore the neighbors of the current node
    for (const [neighbor, distanceToNeighbor] of adjacencyList[currentNode]) {
      // Skip if the neighbor has already been visited
      if (visitedNodes.has(neighbor)) {
        continue;
      }

      // Calculate the new distance from startNode to the neighbor
      const newPath = currentMinDistance + distanceToNeighbor;

      // Get the current minimum distance to the neighbor
      const currentNeighborDistance = minDistances[neighbor];

      // Update the minimum distance if the new path is smaller
      if (newPath < currentNeighborDistance) {
        minDistances[neighbor] = newPath;
      }
    }
  }

  // Map the result array to replace Infinity with -1 for unreachable nodes
  return minDistances.map((distance) =>
    distance === Infinity ? -1 : distance
  );
}

function findNodeWithMinDistance(distances, visitedNodes) {
  let currentMinDistance = Infinity;
  let currentNode = -1;

  // Find the node with the minimum distance among the unvisited nodes
  for (const [node, minDistance] of distances.entries()) {
    // Skip if the node has already been visited
    if (visitedNodes.has(node)) {
      continue;
    }

    if (minDistance <= currentMinDistance) {
      currentNode = node;
      currentMinDistance = minDistance;
    }
  }

  // Return the node with the minimum distance
  return [currentNode, currentMinDistance];
}

// Example usage:
const startNodeExample = 0;
const graphAdjacencyListExample = [
  [
    [1, 5],
    [2, 2],
  ],
  [[3, 4]],
  [
    [1, 8],
    [3, 1],
  ],
  [],
];

const resultExample = dijkstrasAlgorithm(
  startNodeExample,
  graphAdjacencyListExample
);
console.log(resultExample);
