// Function that returns the 'square-code' encoded input string
const squareCode = function(message) {
  message = message.replace(/ /g, "");
  let rowWidth = Math.ceil(Math.sqrt(message.length));
  let regex = new RegExp(".{1," + rowWidth + "}", "g");
  message = message.match(regex);
  output = "";
  for (let i = 0; i < rowWidth; i++) {
    for (let j = 0; j < message.length; j++) {
      if (message[j][i]) {
        output += message[j][i];
      }
    }
    output += " ";
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
