function maxGifts(houses) {
  let cgift = 0;
  let houses2 = [...houses, 0, 0, 0];
  console.log(houses);
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return houses[0];
  }
  for (let i = 0; i < houses.length; i++) {
    console.log(i);
    if (houses2[i] + houses2[i + 2] >= houses2[i + 1] + houses2[i + 3]) {
      cgift += houses2[i];
      i++;
    } else {
      cgift += houses2[i + 1];
      i += 2;
    }
  }
  return cgift;
}

console.log(maxGifts([2, 5, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
console.log(maxGifts([1, 1, 1, 1]));
console.log(maxGifts([1, 2, 3, 4]));
console.log(maxGifts([4, 3, 2, 1]));
