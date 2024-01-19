function compile(code) {
  let contador = 0;
  let retorno = code.length;
  code = code.split("");
  for (let index = 0; index < code.length; index++) {
    code[index] == "+" ? contador++ : contador;
    code[index] == "-" ? contador-- : contador;
    code[index] == "*" ? (contador *= 2) : contador;
    code[index] == "%" ? (retorno = index) : retorno;
    if (code[index] == "<" && retorno < index) {
      index = retorno;
      retorno = code.length;
    }
    if (code[index] == "¿" && contador <= 0) {
      index = index + code.slice(index).indexOf("?");
    }
  }
  return contador;
}
console.log(compile("++*-")); // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile("++%++<")); // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile("++<--")); // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile("++¿+?")); // 3
// 1 + 1 + 1 = 3

console.log(compile("--¿+++?")); // -2
// - 1 - 1 = -2
