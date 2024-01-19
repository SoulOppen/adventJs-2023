function autonomousDrive(store, movements) {
  let f = 0;
  let c = 0;

  // Find initial position of '!'
  for (let fila = 0; fila < store.length; fila++)
    if (store[fila].includes("!")) {
      f = fila;
      c = store[fila].indexOf("!");
    }

  let fFinal = f;
  let cFinal = c;

  for (let mov of movements) {
    if (mov == "R" && cFinal < store[f].length - 1) {
      if (store[fFinal].split("").at(cFinal + 1) !== "*") {
        cFinal = Math.min(store[f].length - 1, cFinal + 1);
      }
    } else if (mov == "L" && cFinal > 0) {
      if (store[fFinal].split("").at(cFinal - 1) !== "*") {
        cFinal = Math.max(0, cFinal - 1);
      }
    } else if (mov == "U" && fFinal > 0) {
      if (store[fFinal - 1].split("").at(cFinal) !== "*") {
        fFinal = Math.max(0, fFinal - 1);
      }
    } else if (mov == "D" && fFinal < store.length - 1) {
      if (store[fFinal + 1].split("").at(cFinal) !== "*") {
        fFinal = Math.min(fFinal + 1, store.length - 1);
      }
    }
  }

  // Update the grid to reflect the new position
  store[f] = store[f].split("");
  store[f][c] = ".";
  store[f] = store[f].join("");
  store[fFinal] = store[fFinal].split("");
  store[fFinal][cFinal] = "!";
  store[fFinal] = store[fFinal].join("");

  return store;
}

let store = ["..!....", "...*.*."];

let movements = ["R", "R", "D", "L"];
let result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

result = autonomousDrive(["..!...."], ["R", "R", "R", "R", "R"]);
console.log(result);
result = autonomousDrive(["!..", "***"], ["U", "L"]);
console.log(result);
result = autonomousDrive(
  [".**.*.*.", ".***....", "..!....."],
  ["D", "U", "R", "R", "R"]
);
console.log(result);
result = autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"]);
console.log(result);
