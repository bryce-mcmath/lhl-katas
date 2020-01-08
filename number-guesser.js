// Setting sigint to true allows CTRL-C to still escape as usual
let prompt = require("prompt-sync")({
  sigint: true
});

// Function to create random num
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const num = getRandomInt(101);
let tries = [];
let guess;
while (guess !== num) {
  guess = prompt("Guess a number between 0 and 100, inclusive: ");
  if (tries.includes(guess)) {
    console.log("You guessed that already!");
    tries.push(guess);
    // checking to see if the guess was a number (NaN doesn't work nicely with usual equality operators)
  } else if (Number.isNaN(Number(guess))) {
    console.log("Not a number! Try again!");
    tries.push(guess);
  } else if (Number(guess) > num) {
    console.log("Too high!");
    tries.push(guess);
  } else if (Number(guess) < num) {
    console.log("Too low!");
    tries.push(guess);
  } else if (Number(guess) === num) {
    tries.push(guess);
    console.log("You got it! You took " + tries.length + " attempts!");
    break;
  }
}
