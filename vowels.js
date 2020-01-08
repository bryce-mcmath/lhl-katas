// Returns number of vowels in a string
let numberOfVowels = function(str) {
  let vowels = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels++;
        break;
      case "y":
        // SOMETIMES
        Math.round(Math.random()) ? vowels++ : null;
        break;
      default:
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("yellow submarine"));
console.log(numberOfVowels("YOLO"));
