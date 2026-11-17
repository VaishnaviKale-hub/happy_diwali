/*function countOccurrences(arr) {
  let count = 0;
  const fields = [];
  const output = {};


  for (let key = 0; key < arr.length; key++) {
    if (!fields.includes(arr[key])) fields.push(arr[key]);  // finding unique values
  }

  for (let current = 0; current < fields.length; current++) {

    for (let index = 0; index < arr.length; index++) {      //counting occurrences
      if (fields[current] === arr[index]) count++;
    }

    output[fields[current]] = count;
    count = 0;
  }
  return output;
} */;

function countOccurrences(arr) {
  const output = {};

  for (let index = 0; index < arr.length; index++) {
    if (!Object.keys(output).includes(arr[index])) output[arr[index]] = 1;
    else output[arr[index]] += 1;
  }
  return output;
}

console.log(countOccurrences([1, 12, 3, 4, 1, 1, 12, [1, 23], [1, 23], [2, 1], "apple", "banana", "apple", "orange", "banana"]));//"a3b2c1a4"