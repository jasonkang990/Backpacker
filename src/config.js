const noSquares = 36;
const noRow = Math.sqrt(noSquares);
// w = blank, b = brown, g = grey, m = gold, r = red, p = purple
const shapes = [
  [
    ['w', 'g', 'w'],
    ['w', 'g', 'w'],
    ['b', 'b', 'b'],
    ['w', 'b', 'w']
  ],
  [
    ['b', 'b'],
    ['b', 'b'],
  ],
  [
    ['w', 'm', 'w'],
    ['m', 'm', 'm']
  ],
  [
    ['b', 'w', 'b'],
    ['b', 'b', 'b']
  ],
  [
    ['p']
  ],
  [
    ['b', 'b'],
    ['w','b']
  ],
  [
    ['b','g','g']
  ],
  [
    ['g','g'],
    ['g','g'],
    ['b','w']
  ],
  [
    ['r'],
    ['b'],
    ['b']
  ]
];
let serverUrl;
if (process.env.NODE_ENV === 'production') {
  serverUrl = 'https://backpacker426.herokuapp.com/api/';
} else {
  serverUrl = 'http://localhost:5000/api/';
}

export {
  noSquares, noRow, shapes, serverUrl
}