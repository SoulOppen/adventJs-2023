function getIndexsForPalindrome(word) {
  if (word == word.split("").reverse().join("")) {
    return [];
  }
  for (let letter = 0; letter < word.length - 1; letter++) {
    for (let letter2 = letter + 1; letter2 < word.length; letter2++) {
      if (word[letter] !== word[letter2]) {
        let swap =
          word.slice(0, letter) +
          word[cambio] +
          word.slice(letter + 1, cambio) +
          word[letter] +
          word.slice(cambio + 1);
        if (swap == swap.split("").reverse().join("")) {
          return [letter, cambio];
        }
      }
    }
  }
  return null;
}
console.log(getIndexsForPalindrome("rotaratov"));
console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
