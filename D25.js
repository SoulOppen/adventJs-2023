function travelDistance(map) {
  let o = new Object();
  let lineas = map.split("\n");
  for (let i = 0; i < lineas.length; i++) {
    lineas[i].split();
    for (let j = 0; j < lineas[i].length; j++) {
      if (lineas[i][j] !== ".") {
        o[lineas[i][j]] = {
          y: i,
          x: j,
        };
      }
    }
  }
  let keys = [...Object.keys(o).slice(0, -1)];
  let sPositionX = o["S"]["x"];
  let sPositionY = o["S"]["y"];
  let r = 0;
  for (let key of keys) {
    r =
      r +
      Math.abs(sPositionX - o[key]["x"]) +
      Math.abs(sPositionY - o[key]["y"]);
    sPositionX = o[key]["x"];
    sPositionY = o[key]["y"];
  }
  return r;
}
const map = `.....1....
..S.......
..........
....3.....
......2...`;
let result = travelDistance(map);
console.log(result); // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/
let result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2
