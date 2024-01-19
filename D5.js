function cyberReindeer(road, time) {
  let remove_barriers = 5;
  let estados = [road];
  let ubicacion;
  let aux = ".";
  let roadModificado = road.split("");
  for (let unitTime = 1; unitTime < time; unitTime++) {
    ubicacion = roadModificado.indexOf("S");
    if (unitTime == 5) {
      roadModificado = roadModificado.join("").replaceAll("|", "*").split("");
    }
    if (roadModificado[ubicacion + 1] != "|") {
      roadModificado[ubicacion] = aux;
      aux = roadModificado[ubicacion + 1];
      roadModificado[ubicacion + 1] = "S";
    }
    estados = [...estados, roadModificado.join("")];
  }
  console.log(estados);
  return estados;
}
const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
