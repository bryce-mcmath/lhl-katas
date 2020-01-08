// Encodes a string as a url
const urlEncode = function(text) {
  text = text.trim();
  textArr = text.split("");
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === " ") {
      textArr.splice(i, 1, "%20");
    }
  }
  return textArr.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
