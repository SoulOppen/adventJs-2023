function findBalancedSegment(message) {
  let zeros = message.reduce(
    (acumulator, value) => (value === 0 ? acumulator + 1 : acumulator),
    0
  );
  let ones = message.reduce(
    (acumulator, value) => (value === 1 ? acumulator + 1 : acumulator),
    0
  );
  let min = Math.min(zeros, ones);
  if (min === 0) {
    return [];
  } else {
    returnMessage = {
      largo: 0,
      message: [],
    };
    for (let i = 0; i < message.length; i++) {
      for (let j = i + 1; j < message.length; j++) {
        let tArray = message.slice(i, j + 1);
        let tZeros = tArray.reduce(
          (acumulator, value) => (value === 0 ? acumulator + 1 : acumulator),
          0
        );
        let tOnes = tArray.reduce(
          (acumulator, value) => (value === 1 ? acumulator + 1 : acumulator),
          0
        );

        if (tZeros === tOnes && returnMessage.largo < j - i) {
          returnMessage.message = [i, j];
          returnMessage.largo = j - i;
        }
      }
    }
    return returnMessage.message;
  }
}
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]));
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]));
// no hay segmentos equilibrados: []
console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));
