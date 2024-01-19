function organizeChristmasDinner(dishes) {
  let object = new Object();
  for (let dish of dishes) {
    let ingredients = dish.slice(1);
    for (let ingredient of ingredients) {
      Object.hasOwn(object, ingredient)
        ? (object[ingredient] = [...object[ingredient], dish[0]]).sort()
        : (object[ingredient] = [dish[0]]);
    }
  }
  let ingredientTwice = Object.keys(object).filter(
    (key) => object[key].length >= 2
  );

  ingredientTwice.sort();
  let arrayR = ingredientTwice.map((x) => [x, ...object[x]]);
  return arrayR;
}
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));

/*
  
  "sauce" está en 2 platos: "christmas turkey" y "pizza".
  "sugar" está en 2 platos: "cake" y "hot chocolate".
  El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.
  
  Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
  Y los platos de cada ingrediente también están ordenados alfabéticamente.
  
  [
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
  ]
  */
