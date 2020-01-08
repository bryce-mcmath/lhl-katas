// Function calculates change and returns object with denominations
let calculateChange = function(total, cash) {
  let owed = cash - total;
  let change = {};

  let twenties = Math.floor(owed / 2000);
  if (twenties > 0) {
    change.twenties = twenties;
    owed -= 2000 * twenties;
  }

  let tens = Math.floor(owed / 1000);
  if (tens > 0) {
    change.tens = tens;
    owed -= 1000 * tens;
  }

  let fives = Math.floor(owed / 500);
  if (fives > 0) {
    change.fives = fives;
    owed -= 500 * fives;
  }

  let toonies = Math.floor(owed / 200);
  if (toonies > 0) {
    change.toonies = toonies;
    owed -= 200 * toonies;
  }

  let loonies = Math.floor(owed / 100);
  if (loonies > 0) {
    change.loonies = loonies;
    owed -= 100 * loonies;
  }

  let quarters = Math.floor(owed / 25);
  if (quarters > 0) {
    change.quarters = quarters;
    owed -= 25 * quarters;
  }

  let dimes = Math.floor(owed / 10);
  if (dimes > 0) {
    change.dimes = dimes;
    owed -= 10 * dimes;
  }

  let nickels = Math.floor(owed / 5);
  if (nickels > 0) {
    change.nickels = nickels;
    owed -= 5 * nickels;
  }

  let pennies = Math.floor(owed / 1);
  if (pennies > 0) {
    change.pennies = pennies;
    owed -= 1 * pennies;
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
