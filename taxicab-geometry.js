// Function that calculates position based on inputted directions
const blocksAway = function(directions) {
  let east = 0,
    north = 0;
  let direction = "up";
  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === "right" && direction === "up") {
      direction = "right";
      east += directions[i + 1];
    } else if (directions[i] === "right" && direction === "right") {
      direction = "down";
      north -= directions[i + 1];
    } else if (directions[i] === "right" && direction === "down") {
      direction = "left";
      east -= directions[i + 1];
    } else if (directions[i] === "right" && direction === "left") {
      direction = "up";
      north += directions[i + 1];
    } else if (directions[i] === "left" && direction === "up") {
      direction = "left";
      east -= directions[i + 1];
    } else if (directions[i] === "left" && direction === "right") {
      direction = "up";
      north += directions[i + 1];
    } else if (directions[i] === "left" && direction === "down") {
      direction = "right";
      east += directions[i + 1];
    } else if (directions[i] === "left" && direction === "left") {
      direction = "down";
      north -= directions[i + 1];
    }
  }
  return { east: east, north: north };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
