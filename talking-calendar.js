// Function reformats a numerical date
let talkingCalendar = function(date) {
  let output = "";
  dateArr = date.split("/");
  let year = dateArr[0],
    month = dateArr[1],
    day = dateArr[2];

  // Month formatting
  switch (month) {
    case "01":
      output += "January ";
      break;
    case "02":
      output += "February ";
      break;
    case "03":
      output += "March ";
      break;
    case "04":
      output += "April ";
      break;
    case "05":
      output += "May ";
      break;
    case "06":
      output += "June ";
      break;
    case "07":
      output += "July ";
      break;
    case "08":
      output += "August ";
      break;
    case "09":
      output += "September ";
      break;
    case "10":
      output += "October ";
      break;
    case "11":
      output += "November ";
      break;
    case "12":
      output += "December ";
      break;
  }

  // Day formatting
  output += parseInt(day, 10).toString();
  switch (day.charAt(day.length - 1)) {
    case "1":
      output += "st, ";
      break;
    case "2":
      output += "nd, ";
      break;
    case "3":
      output += "rd, ";
      break;
    default:
      output += "th, ";
  }

  // Adding year
  output += year;

  return output;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
