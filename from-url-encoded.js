// Function converts encoded URL to JS object
const urlDecode = function(text) {
  decodedObj = {};
  textArr = text.split("&");
  for (let i = 0; i < textArr.length; i++) {
    textArr[i] = textArr[i].split("=");
  }
  for (let i = 0; i < textArr.length; i++) {
    decodedObj[textArr[i][0]] = convertToSpace(textArr[i][1]);
  }
  return decodedObj;
};

function convertToSpace(input) {
  return input.replace(/%20/g, " ");
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
