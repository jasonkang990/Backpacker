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
const serverUrl = "http://localhost:5000/api/";

let axios = require('axios');
// axios.defaults.withCredentials = true;

export {
  noSquares, noRow, shapes, serverUrl, axios
}