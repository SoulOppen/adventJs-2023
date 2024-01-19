function distributeGifts(weights) {
  let returnWeight = new Array(weights.length);

  for (let i = 0; i < weights.length; i++) {
    let internal = new Array(weights[i].length);

    for (let j = 0; j < weights[i].length; j++) {
      let store = {
        value: 0,
        vecinos: 0,
      };
      for (
        let i2 = Math.max(0, i - 1);
        i2 < Math.min(weights.length, i + 2);
        i2++
      ) {
        for (
          let j2 = Math.max(0, j - 1);
          j2 < Math.min(weights[i].length, j + 2);
          j2++
        ) {
          if (
            weights[i2][j2] !== null &&
            Math.abs(i - i2) + Math.abs(j - j2) < 2
          ) {
            console.log(weights[i2][j2], i, j);
            store.value += weights[i2][j2];
            store.vecinos += 1;
            console.log(store);
          }
          store.vecinos === 0
            ? (internal[j] = 0)
            : (internal[j] = Math.round(store.value / store.vecinos));
        }
      }
    }
    returnWeight[i] = internal;
  }
  return returnWeight;
}
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

console.log(distributeGifts(input));
// Resultado paso a paso de los primeros cálculos:

// En la posición [0][0] tenemos el valor 4
// Sus vecinos son los valores 5 y 6
// (4 + 5 + 6) / 3 = 5

// En la posición [0][1] tenemos el valor 5
// Sus vecinos son los valores 4 y 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// En la posición [0][2] tenemos el valor 1
// Sus vecinos son los valores 5 y 3
// (1 + 5 + 3) / 3 = 3

// En la posición [1][0] tenemos el valor 6
// Sus vecinos son los valores 4, 8
// (6 + 4 + 8 ) / 3 = 6

// En la posición [1][1] tenemos el valor null
// Sus vecinos son los valores 5, 6 y 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... y así con el resto de posiciones
[
  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2],
][
  // Resultado final tras redondear con Math.round()
  ([5, 3, 3], [6, 5, 3], [7, 6, 4])
];
