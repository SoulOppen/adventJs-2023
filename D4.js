function decode(message) {
  while (message.includes("(") && message.includes(")")) {
    let clausura = message.indexOf(")");
    let apertura = message.slice(0, clausura).lastIndexOf("(");
    let corregido = message
      .slice(apertura + 1, clausura)
      .split("")
      .reverse()
      .join("");
    message = [
      message.slice(0, apertura),
      corregido,
      message.slice(clausura + 1),
    ]
      .join("")
      .trim();
  }
  return message;
}
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
