// Function for each case type
let camelCase = function(input) {
  let strArr = input.split(" ");
  if (strArr.length > 1) {
    for (let i = 1; i < strArr.length; i++) {
      strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join("");
  } else {
    return input;
  }
};

let snakeCase = function(input) {
  let strArr = input.split(" ");
  if (strArr.length > 1) {
    return strArr.join("_");
  } else {
    return input;
  }
};

let pascalCase = function(input) {
  let strArr = input.split(" ");
  if (strArr.length >= 1) {
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join("");
  } else {
    return input;
  }
};

let kebabCase = function(input) {
  let strArr = input.split(" ");
  if (strArr.length >= 1) {
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i][0].toLowerCase() + strArr[i].slice(1);
    }
    return strArr.join("-");
  } else {
    return input;
  }
};

let titleCase = function(input) {
  let strArr = input.split(" ");
  if (strArr.length >= 1) {
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(" ");
  } else {
    return input;
  }
};

let vowelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        output += input[i].toUpperCase();
        break;
      default:
        output += input[i];
    }
  }
  return output;
};

let consonantCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case " ":
        output += input[i];
        break;
      default:
        output += input[i].toUpperCase();
    }
  }
  return output;
};

// Function that accepts input as well as the type(s) of cases to ouput
const makeCase = function(input, caseType) {
  if (Array.isArray(caseType)) {
    if (caseType.includes("camel")) {
      input = camelCase(input);
    }
    if (caseType.includes("pascal")) {
      input = pascalCase(input);
    }
    if (caseType.includes("snake")) {
      input = snakeCase(input);
    }
    if (caseType.includes("kebab")) {
      input = kebabCase(input);
    }
    if (caseType.includes("title")) {
      input = titleCase(input);
    }
    if (caseType.includes("vowel")) {
      input = vowelCase(input);
    }
    if (caseType.includes("consonant")) {
      input = consonantCase(input);
    }
    if (caseType.includes("upper")) {
      input = input.toUpperCase();
    }
    if (caseType.includes("lower")) {
      input = input.toLowerCase();
    }
    return input;
  } else {
    switch (caseType) {
      case "camel":
        return camelCase(input);
      case "snake":
        return snakeCase(input);
      case "kebab":
        return kebabCase(input);
      case "pascal":
        return pascalCase(input);
      case "title":
        return titleCase(input);
      case "vowel":
        return vowelCase(input);
      case "consonant":
        return consonantCase(input);
      case "upper":
        return input.toUpperCase();
      case "lower":
        return input.toLowerCase();
    }
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
