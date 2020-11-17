const noSquares = 36;
const noRow = Math.sqrt(noSquares);
const shapes = [
  // w = blank, b = brown, g = grey, m = gold
  [
    ['w', 'g', 'w'],
    ['w', 'g', 'w'],
    ['b', 'b', 'b'],
    ['w', 'b', 'w']
  ],
  [
    ['w', 'b', 'w', 'b', 'w'],
    ['b', 'b', 'g', 'b', 'b'],
    ['w', 'b', 'g', 'b', 'w'],
    ['w', 'w', 'b', 'w', 'w']
  ],
  [
    ['b', 'w', 'b'],
    ['w', 'w', 'w'],
    ['b', 'g', 'b']
  ],
  [
    ['m', 'w', 'w'],
    ['m', 'm', 'w'],
    ['m', 'm', 'm']
  ],
  [
    ['m']
  ]
];

export {
  noSquares, noRow, shapes
}