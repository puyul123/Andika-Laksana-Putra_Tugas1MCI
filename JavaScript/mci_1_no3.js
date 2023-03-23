function argwhere(array) {
  const indices = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i][j].length; k++) {
        if (array[i][j][k] !== 0) {
          indices.push([i, j, k]);
        }
      }
    }
  }
  return indices;
}


const array = [
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
];
const indices = argwhere(array);

for (let i = 0; i < indices.length; i++){
    console.log(`[${indices[i].join(", ")}]`);
}