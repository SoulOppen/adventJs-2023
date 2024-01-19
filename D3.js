function findNaughtyStep(original, modified) {
  if (original.length < modified.length) {
    for (character in modified) {
      if (modified[character] != original[character]) {
        return modified[character];
      }
    }
  } else if (original.length > modified.length) {
    for (character in original) {
      if (modified[character] != original[character]) {
        return original[character];
      }
    }
  } else {
    return "";
  }
}

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified)); // 'f'

original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified)); // ''
