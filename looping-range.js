function range(start, end, step) {
  let arrayRange = [];

  // Return empty array if given incorrect parameters
  if (typeof (start) === "undefined" || typeof (end) === "undefined" || typeof (step) === "undefined" || start > end || step <= 0) {
    return arrayRange;
  }

  // Build array of numbers from start to end counting by step
  for (let num = start; num <= end; num += step) {
    arrayRange.push(num);
  }
  return arrayRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));