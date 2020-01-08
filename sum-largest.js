// Sum the two largest numbers in an array, logs an error message or returns undefined if the input isn't formatted properly
let sumLargestNumbers = function(data) {
  // check if input is array of length >= 2
  if (data instanceof Array && data.length > 1) {
    //get first max value
    max1 = getMax(data);

    //remove first max value from array
    for (let i = 0; i < data.length; i++) {
      if (data[i] === max1) {
        data.splice(i, 1);
      }
    }

    //get second max value
    max2 = getMax(data);

    //return sum of two max values
    return max1 + max2;

    //returns error message
  } else {
    console.log("Please pass an array with length of at least two.");
  }
};

// Function that finds the highest value in an array
function getMax(arr) {
  let max = Number.NEGATIVE_INFINITY;
  arr.forEach(function(val) {
    if (val > max) {
      max = val;
    }
  });
  if (max === Number.NEGATIVE_INFINITY) {
    return undefined;
  }
  return max;
}

// Tests
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
