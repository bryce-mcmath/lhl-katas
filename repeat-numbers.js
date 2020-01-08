// Function takes in an array of arrays in the format [m, n], and logs m n times
let repeatNumbers = function(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    if (i >= 1) {
      str += ", " + data[i][0].toString().repeat(data[i][1]);
    } else {
      str += data[i][0].toString().repeat(data[i][1]);
    }
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
