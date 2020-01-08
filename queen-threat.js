// Function to generate a multidimensional array representing a chess board with two queens on it
function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j) {
        board[i].push(1);
      } else if (blackQueen[0] === i && blackQueen[1] === j) {
        board[i].push(1);
      } else {
        board[i].push(0);
      }
    }
  }
  return board;
}

// Function to check a given 'board' to see if the queens are in position to take eachother out
function queenThreat(board) {
  //get queen positions
  let queen1;
  let queen2;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1 && queen1 === undefined) {
        queen1 = [i, j];
      } else if (board[i][j] === 1) {
        queen2 = [i, j];
      }
    }
  }

  // check if vertically aligned
  if (queen1[0] === queen2[0]) {
    return true;

    // check if horizontally aligned
  } else if (queen1[1] === queen2[1]) {
    return true;

    // check if diagonally aligned
  } else if (
    Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])
  ) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
