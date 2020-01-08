// Returns object with the instructor with the longest name and the course they teach
const instructorWithLongestName = function(instructors) {
  let longestNameLength = 0;
  let longestName;
  instructors.forEach(element => {
    if (element.name.length > longestNameLength) {
      longestNameLength = element.name.length;
      longestName = element;
    }
  });
  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
