function findTheRuns(arr) {
  if (arr.length <= 1) return arr;
  const runs = [];
  let run = [arr[0]];
  let direction = null;

  for (let i = 1; i < arr.length; i++) {

    const newDirection = arr[i] >= arr[i - 1]
      ? "ascending"
      : "descending";

    if (direction === null || direction === newDirection) {
      run.push(arr[i]);
      direction = newDirection;
    } else {
      runs.push(run);
      run = [arr[i]];
      direction = arr[i] === arr[i - 1] ? direction : null;
    }
  }

  runs.push(run);
  return runs;
}

console.log(findTheRuns([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5])); //[[1, 2, 3, 4], [3, 2, 1], [2, 3, 4, 5]]
console.log(findTheRuns([1, 2, 3, 3, 4, 3, 2, 1, 2, 3, 4, 5])); //[[1, 2, 3, 3, 4], [3, 2, 1], [2, 3, 4, 5]]
console.log(findTheRuns([2, 3, 3, 2, 3, 2, 1, 2, 3, 4, 5])); //[[2, 3, 3], [2,3], [2, 1], [2, 3, 4, 5]]
console.log(findTheRuns([3, 3, 2, 1, 0, 3, 2, 1, 2, 3, 4, 5])); //[[2, 3, 3], [2,3], [2, 1], [2, 3, 4, 5]]
console.log(findTheRuns([1, 2, 3, 3, 4, 6, 6, 2, 1, 3, 4]));






