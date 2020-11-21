const noSquares = 36;
const noRow = Math.sqrt(noSquares);
const shapes = [
  // w = blank, b = brown, g = grey, m = gold, r = red, p = purple
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
    ['m', 'w', 'w'],
    ['m', 'm', 'm']
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
const serverUrl = "http://localhost:5000/api/";

let axios = require('axios');
// axios.defaults.withCredentials = true;

export {
  noSquares, noRow, shapes, serverUrl, axios
}