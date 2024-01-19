function findFirstRepeated(gifts) {
  let giftsS = gifts.slice(0, -1);
  let valorMin = gifts.length + 10;
  let index = 0;
  for (let item of giftsS) {
    if (valorMin <= index) {
      break;
    }
    let giftsE = gifts.slice(index + 1);
    if (giftsE.includes(item)) {
      valorMin = Math.min(valorMin, giftsE.indexOf(item) + index + 1);

      giftsE = giftsE.join("").replaceAll(item, "").split("");
    }
    index += 1;
  }
  if (valorMin == gifts.length + 10) {
    return -1;
  } else {
    return gifts[valorMin];
  }
}
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId == 3); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2 == -1); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3 == 5); // 5
