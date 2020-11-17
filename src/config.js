const noSquares = 36;
const noRow = Math.sqrt(noSquares);
const shapes = [
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
  ],
  [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
  ],
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 1]
  ]
];

export {
  noSquares, noRow, shapes
}