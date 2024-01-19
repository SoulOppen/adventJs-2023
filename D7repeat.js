function drawGift(size, symbol) {
  console.log(symbol);
  let totalLine = 2 * size - 1;
  let draw = "";
  for (let c = 0; c < totalLine; c++) {
    let line = "";
    if (c == 0) {
      line = " ".repeat(size - 1) + "#".repeat(size);
    } else if (c < size - 1) {
      line =
        " ".repeat(size - c - 1) +
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(c - 1) +
        "#";
    } else if (c == size - 1) {
      line = "#".repeat(size) + symbol.repeat(size - 2) + "#";
    } else if (c == totalLine - 1) {
      line = "#".repeat(size);
    } else {
      line =
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(totalLine - c - 2) +
        "#";
    }
    draw += line + "\n";
  }
  return draw;
}
console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/
console.log(drawGift(1, "^"));
/*
#
*/
