function getStaircasePaths(steps, maxJump) {
  const result = [];
  const stack = [[]];

  while (stack.length > 0) {
    console.log("inicio", "r", result, "s", stack);
    const path = stack.pop();
    const remainingSteps = steps - path.reduce((sum, step) => sum + step, 0);

    if (remainingSteps === 0) {
      result.push([...path]);
      console.log(0, "P", path, "S", stack);
    } else {
      for (let i = 1; i <= Math.min(maxJump, remainingSteps); i++) {
        stack.push([...path, i]);
        console.log(i, path, stack);
      }
    }
  }

  return result.sort();
}

// Ejemplos
//console.log(getStaircasePaths(4, 2));

//console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
//console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
//console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
