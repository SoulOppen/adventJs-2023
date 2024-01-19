function adjustLights(lights) {
  let lightCompared = "🔴";
  let changesR = 0;
  let changesG = 0;
  for (let light of lights) {
    lightCompared == light ? (changesG += 1) : (changesR += 1);
    lightCompared == "🔴" ? (lightCompared = "🟢") : (lightCompared = "🔴");
  }

  return Math.min(changesG, changesR);
}
console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴))

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (ya están alternadas)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (cambias la segunda luz a 🟢)
