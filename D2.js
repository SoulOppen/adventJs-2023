function manufacture(gifts, materials) {
  let giftsList = [];
  gifts.forEach((element) => {
    let puede = true;
    for (character of element) {
      if (!materials.includes(character)) {
        puede = false;
        break;
      }
    }
    if (puede) {
      giftsList = [...giftsList, element];
    }
  });
  return giftsList;
}
let gifts = ["tren", "oso", "pelota"];
let materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ["juego", "puzzle"];
materials = "jlepuz";

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ["libro", "ps5"];
materials = "psli";

console.log(manufacture(gifts, materials)); // []
