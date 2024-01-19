function drawClock(time) {
  let numberEstructure = new Array(7).fill(" ");

  let one = [...numberEstructure];
  for (let i = 0; i < 7; i++) {
    one[i] = [" ", " ", "*"];
  }
  let two = [...numberEstructure];
  two[0] = ["*", "*", "*"];
  two[3] = ["*", "*", "*"];
  two[6] = ["*", "*", "*"];
  for (let i = 1; i < 3; i++) {
    two[i] = [" ", " ", "*"];
  }
  for (let i = 4; i < 6; i++) {
    two[i] = ["*", " ", " "];
  }
  let three = [...numberEstructure];
  three[0] = ["*", "*", "*"];
  three[3] = ["*", "*", "*"];
  three[6] = ["*", "*", "*"];
  for (let i = 1; i < 3; i++) {
    three[i] = [" ", " ", "*"];
  }
  for (let i = 4; i < 6; i++) {
    three[i] = [" ", " ", "*"];
  }
  let four = [...numberEstructure];
  four[3] = ["*", "*", "*"];
  for (let i = 0; i < 3; i++) {
    four[i] = ["*", " ", "*"];
  }
  for (let i = 4; i < 7; i++) {
    four[i] = [" ", " ", "*"];
  }
  let five = [...numberEstructure];
  five[0] = ["*", "*", "*"];
  five[3] = ["*", "*", "*"];
  five[6] = ["*", "*", "*"];
  for (let i = 1; i < 3; i++) {
    five[i] = ["*", " ", " "];
  }
  for (let i = 4; i < 6; i++) {
    five[i] = [" ", " ", "*"];
  }
  let six = [...numberEstructure];
  six[3] = ["*", "*", "*"];
  six[6] = ["*", "*", "*"];
  for (let i = 0; i < 3; i++) {
    six[i] = ["*", " ", " "];
  }
  for (let i = 4; i < 6; i++) {
    six[i] = ["*", " ", "*"];
  }
  let seven = [...numberEstructure];
  seven[0] = ["*", "*", "*"];
  for (let i = 1; i < 7; i++) {
    seven[i] = [" ", " ", "*"];
  }
  let eight = [...numberEstructure];
  eight[0] = ["*", "*", "*"];
  eight[3] = ["*", "*", "*"];
  eight[6] = ["*", "*", "*"];
  for (let i = 1; i < 3; i++) {
    eight[i] = ["*", " ", "*"];
  }
  for (let i = 4; i < 6; i++) {
    eight[i] = ["*", " ", "*"];
  }
  let nine = [...numberEstructure];
  nine[0] = ["*", "*", "*"];
  nine[3] = ["*", "*", "*"];
  for (let i = 1; i < 3; i++) {
    nine[i] = ["*", " ", "*"];
  }
  for (let i = 4; i < 7; i++) {
    nine[i] = [" ", " ", "*"];
  }
  let zero = [...numberEstructure];
  zero[0] = ["*", "*", "*"];
  zero[6] = ["*", "*", "*"];
  for (let i = 1; i < 6; i++) {
    zero[i] = ["*", " ", "*"];
  }
  let point = [...numberEstructure];
  point[2] = ["*"];

  point[4] = ["*"];

  let numbers = [zero, one, two, three, four, five, six, seven, eight, nine];
  let [hours, min] = time.split(":");
  let [digt1, digt2] = hours.split("");
  let [digt3, digt4] = min.split("");
  let final = [...numberEstructure];
  for (let i = 0; i < 7; i++) {
    final[i] = [
      ...numbers[digt1][i],
      " ",
      ...numbers[digt2][i],
      " ",
      ...point[i],
      " ",
      ...numbers[digt3][i],
      " ",
      ...numbers[digt4][i],
    ];
  }
  return final;
}
console.log(drawClock("01:30"));
