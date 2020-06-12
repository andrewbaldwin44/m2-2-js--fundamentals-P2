// Q4
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(...args) {
  let sum = args.reduce((a, b) => a + b);
  return Math.round(sum / args.length);
}

// make certain to console the returned value
console.log(calculateAverage(76, 60, 83, 100, 78));
