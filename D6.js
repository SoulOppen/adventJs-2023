function maxDistance(movements) {
  movements = movements.split("");
  const cantidadMayorQ = movements.reduce(
    (acumulator, currentChart) =>
      currentChart == ">" ? acumulator + 1 : acumulator,
    0
  );

  const cantidadMenorQ = movements.reduce(
    (acumulator, currentChart) =>
      currentChart == "<" ? acumulator + 1 : acumulator,
    0
  );

  const asteriscos = movements.reduce(
    (acumulator, currentChart) =>
      currentChart == "*" ? acumulator + 1 : acumulator,
    0
  );
  return Math.abs(cantidadMayorQ - cantidadMenorQ) + asteriscos;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
