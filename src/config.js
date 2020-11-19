const noSquares = 36;
const noRow = Math.sqrt(noSquares);
const shapes = [
  // w = blank, b = brown, g = grey, m = gold
  // [
  //   ['w', 'g', 'w'],
  //   ['w', 'g', 'w'],
  //   ['b', 'b', 'b'],
  //   ['w', 'b', 'w']
  // ],
  [
    ['b', 'b'],
    ['b', 'b'],
  ],
  // [
  //   ['w', 'g', 'w'],
  //   ['g', 'g', 'g']
  // ],
  // [
  //   ['m', 'w', 'w'],
  //   ['m', 'm', 'w'],
  //   ['m', 'm', 'm']
  // ],
  [
    ['m']
  ]
];

export {
  noSquares, noRow, shapes
}