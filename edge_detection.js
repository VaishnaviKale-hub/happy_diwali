function isEdgeDetected(treshold, brightness, neighbour) {
  const difference = Math.abs(brightness - neighbour);
  return difference > treshold;
};

function detectEdjes(bitmap, treshold) {
  const rows = bitmap.length;
  const cols = bitmap[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let isedge = false;

      if (row + 1 < rows) {
        isedge = isEdgeDetected(treshold, bitmap[row][col], bitmap[row + 1][col]);
      }
      if (col + 1 < cols) {
        isedge = isEdgeDetected(treshold, bitmap[row][col], bitmap[row][col + 1]);
      }

      if (isedge) bitmap[row][col] = 0;
    }
  }
  return bitmap;
}

const bitmap = [
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
];

console.log(detectEdjes(bitmap, 50));
