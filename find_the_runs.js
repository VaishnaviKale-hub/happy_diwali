function findTheRuns(arr) {
  if (arr.length <= 1) return arr;
  // 0,-1,1
  const runs = [];
  let run = [arr[0]];
  let direction = null;

  for (let i = 1; i < arr.length; i++) {
    // if (arr[i] === arr[i - 1]) {
    //   runs.push(run);
    //   run = [arr[i]];
    //   direction = null;
    //   continue;
    // }

    const newDirection = arr[i] >= arr[i - 1]
      ? "ascending"
      : "descending";

    if (direction === null || direction === newDirection) {
      run.push(arr[i]);
      direction = newDirection;
    }
    else {
      runs.push(run);
      run = [arr[i]];
      direction = newDirection;
    }
  }

  runs.push(run);
  return runs;
}

// console.log(findTheRuns([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5]));
// console.log(findTheRuns([1, 2, 3, 3, 4, 3, 2, 1, 2, 3, 4, 5]));
console.log(findTheRuns([2, 3, 3, 2, 3, 2, 1, 2, 3, 4, 5]));








