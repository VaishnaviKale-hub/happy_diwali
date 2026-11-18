function maximumSubArray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] === arr[i]) tempStart = i;

    currentSum = Math.max(arr[i], currentSum + arr[i]);

    if (currentSum === arr[i]) tempStart = i;

    if (currentSum > maxSum) {
      start = tempStart;
      maxSum = currentSum;
      end = i;
    }
  }

  return arr.slice(start, end + 1);

}

console.log(maximumSubArray([-1, -2, -3]));//[-1]
console.log(maximumSubArray([1, 2, 3]));//[1,2,3]
console.log(maximumSubArray([1, 2, 3, 4, 5]));//[1,2,3,4,5]
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));//[4,-1,2,1]
console.log(maximumSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4]));//[-1]


function subArrays(arr) {
  const subArrays = [];
  let subArray = [];

  // for (let key = 0; key < arr.length; key++) {
  //   subArray = [arr[key]];

  //   for (let index = key + 1; index < arr.length; index++) {
  //     subArrays.push([...subArray]);
  //     subArray.push(arr[index]);
  //   }
  //   subArrays.push([...subArray]);
  // }


  // for (let key = 0; key < arr.length; key++) {
  //   for (let index = key; index < arr.length; index++) {
  //     for (let k = key; k <= index; k++) {
  //       console.log(arr[k]);
  //     }
  //   }
  // }


  return subArrays;
}

console.log(subArrays([1, 2, 3]));