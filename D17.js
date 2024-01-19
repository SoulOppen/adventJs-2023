function optimizeIntervals(intervals) {
  if (intervals.length == 0) {
    return [];
  }
  if (intervals.length == 1) {
    return intervals;
  }

  intervals = intervals.toSorted((a, b) => a[0] - b[0]);
  for (let interval = 0; interval < intervals.length - 1; interval++) {
    if (intervals[interval + 1][0] <= intervals[interval][1]) {
      intervals[interval] = [
        Math.min(intervals[interval][0], intervals[interval + 1][0]),
        Math.max(intervals[interval][1], intervals[interval + 1][1]),
      ];

      intervals.splice(interval + 1, 1);
      interval--;
    }
  }
  return intervals;
}
console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
); // [[2, 8]]

console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [[1, 6], [8, 10]]

console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
); // [[1, 2], [3, 4], [5, 6]]
