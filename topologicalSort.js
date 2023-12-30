function topologicalSort(jobs, deps) {
  let digraph = {};
  let indegrees = {};

  // initialize digraph and indegrees
  for (let node of jobs) {
    digraph[node] = [];
    indegrees[node] = 0;
  }
  // map each node to its neighbors in digraph
  for (let [node, neighbor] of deps) {
    digraph[node].push(neighbor);
  }
  //   console.log(digraph, indegrees);

  // map the nodes to their indegrees
  for (let node in digraph) {
    for (let neighbor of digraph[node]) {
      indegrees[neighbor] += 1;
    }
  }
  //   console.log(indegrees);

  let nodesWithNoDependencies = [];

  // add all the nodes with indegree of 0
  for (let node in indegrees) {
    if (indegrees[node] === 0) {
      nodesWithNoDependencies.push(node);
    }
  }

  let topologicalSortedArr = [];

  // while there are still nodes with no dependencies,
  // push them into the sorted array
  while (nodesWithNoDependencies.length > 0) {
    let node = nodesWithNoDependencies.pop();
    topologicalSortedArr.push(node);

    // decrement the indegrees of the neighboring nodes
    for (let neighbor of digraph[node]) {
      indegrees[neighbor] -= 1;

      if (indegrees[neighbor] === 0) {
        nodesWithNoDependencies.push(neighbor);
      }
    }

    // console.log(topologicalSortedArr);
  }

  if (topologicalSortedArr.length === jobs.length) {
    return topologicalSortedArr;
  } else {
    return []; // the graph has a cycle
  }
}

// Example usage:
const jobs = [1, 2, 3, 4];
const dependencies = [
  [1, 2],
  [1, 3],
  [3, 2],
  [4, 2],
  [4, 3],
];

const result = topologicalSort(jobs, dependencies);
console.log(result);
