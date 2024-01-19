function calculateTime(deliveries) {
  let deliveriesSeconds = deliveries.map((x) => {
    x = x.split(":");
    return parseInt(x[0]) * 60 * 60 + parseInt(x[1]) * 60 + parseInt(x[2]);
  });
  let sumTime = deliveriesSeconds.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let remeningTime = sumTime - 7 * 60 * 60;
  let remeningTimeHours = Math.floor(Math.abs(remeningTime) / (60 * 60))
    .toString()
    .padStart(2, "0");
  let remeningTimeMin = Math.floor(
    (Math.abs(remeningTime) - remeningTimeHours * 60 * 60) / 60
  )
    .toString()
    .padStart(2, "0");
  let remeningTimeSec = (
    Math.abs(remeningTime) -
    remeningTimeHours * 60 * 60 -
    remeningTimeMin * 60
  )
    .toString()
    .padStart(2, "0");
  let time = remeningTimeHours + ":" + remeningTimeMin + ":" + remeningTimeSec;
  if (remeningTime < 0) {
    return "-" + time;
  } else {
    return time;
  }
}
console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
