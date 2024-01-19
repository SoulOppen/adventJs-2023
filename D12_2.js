function checkIsValidCopy(original, copy) {
  let degradacion = ["#", "+", ":", ".", " "];
  original = original.split("");
  copy = copy.split("");
  if (original.length !== copy.length) {
    return false;
  }
  let revisar_letra = original
    .filter((x, index) => x !== copy[index])
    .every(
      (_, index) =>
        (degradacion.includes(copy[index]) ||
          original[index].toLowerCase() === copy[index]) &&
        degradacion.indexOf(copy[index]) >= degradacion.indexOf(original[index])
    );
  return revisar_letra;
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")); // true
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")); // false (por la p inicial)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (hay un # donde no debería)
console.log(
  checkIsValidCopy(
    "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños",
    "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño"
  )
);
