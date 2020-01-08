// Function returns a multiplication table with a given max number
const multiplicationTable = function(maxValue) {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    table += makeRow(maxValue, i) + "\n";
  }
  return table;
};

function makeRow(max, multiple) {
  let row = "";
  for (let i = 1; i <= max; i++) {
    row += (i * multiple).toString() + " ";
  }
  return row;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
