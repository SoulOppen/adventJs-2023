function createChristmasTree(ornaments, height) {
  let materials = ornaments.repeat(2);
  let draw = "";
  for (let level = 0; level < height; level++) {
    materials.length <= level
      ? (materials += ornaments.repeat(
          Math.ceil((level - materials.length) / ornaments.length) + 1
        ))
      : (materials = materials);
    draw +=
      " ".repeat(height - 1 - level) +
      materials
        .slice(0, level + 1)
        .split("")
        .join(" ") +
      "\n";
    materials = materials.slice(level + 1);
  }
  return draw + " ".repeat(height - 1) + "|" + "\n";
}
console.log(createChristmasTree("123", 25));
console.log(createChristmasTree("X01", 5));
