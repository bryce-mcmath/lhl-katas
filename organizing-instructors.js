// Function to organize an array of instructors into an object with instructors listed by course
const organizeInstructors = function(instructors) {
  return instructors.reduce(function(acc, obj) {
    let key = obj.course;

    // If the key is not present in the accumulative object
    if (!acc[key]) {
      // Create an empty array with that key
      acc[key] = [];
    }
    // Add the teachers name to the given key's array
    acc[key].push(obj.name);

    // Pass the accumulative object on
    return acc;
  }, {});
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);

console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
