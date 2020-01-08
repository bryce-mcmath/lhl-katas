// Sums all the even or odd numbers in an array
const conditionalSum = function(values, condition) {
  let sum = 0;
  values.forEach(function(val) {
    if (val % 2 === 0 && condition === "even") {
      sum += val;
    } else if (val % 2 !== 0 && condition === "odd") {
      sum += val;
    }
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
