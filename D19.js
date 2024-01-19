function revealSabotage(store) {
  let storeInfo = new Array(store.length);
  for (let i = 0; i < store.length; i++) {
    let internal = new Array(store[i].length).fill(" ");
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] == "*") {
        internal[j] = "*";
      } else {
        let value = 0;
        for (
          let i2 = Math.max(0, i - 1);
          i2 < Math.min(i + 2, store.length);
          i2++
        ) {
          for (
            let j2 = Math.max(0, j - 1);
            j2 < Math.min(j + 2, store[i].length);
            j2++
          ) {
            if (
              Math.abs(i - i2) + Math.abs(j - j2) > 0 &&
              store[i2][j2] == "*"
            ) {
              value += 1;
            }
          }
          value == 0 ? (internal[j] = " ") : (internal[j] = value.toString());
        }
      }
    }
    storeInfo[i] = internal;
  }
  return storeInfo;
}
const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
  [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
  ]
  */
