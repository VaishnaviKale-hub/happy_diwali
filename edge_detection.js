function isEdgeDetected(threshold, brightness, neighbour) {
  const difference = Math.abs(brightness - neighbour);
  return difference > threshold;
};

function detectEdges(bitmap, threshold) {
  const rows = bitmap.length;
  const cols = bitmap[0].length;
  const edges = [];

  for (let row = 0; row < rows; row++) {
    edges[row] = [];
    for (let col = 0; col < cols; col++) {
      const isBottomInside = row + 1 < rows;
      const isRightInside = col + 1 < cols;

      const isEdgeBottomDetected = isBottomInside && isEdgeDetected(threshold, bitmap[row][col], bitmap[row + 1][col]);
      const isEdgeRightDetected = isRightInside && isEdgeDetected(threshold, bitmap[row][col], bitmap[row][col + 1]);

      edges[row][col] = (isEdgeBottomDetected || isEdgeRightDetected) ? 0 : bitmap[row][col];
    }
  }
  return edges;
}

const bitmap = [
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
];

console.log(detectEdges(bitmap, 50));
