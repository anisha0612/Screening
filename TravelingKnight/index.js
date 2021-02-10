const board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
}

const addMove = (x, y, level) => {
  if (x >= 0 && x <= 8 && y >= 0 && y <= 8 && board[x][y] == null) {
    board[x][y] = level;
  }
};

const addAllMoves = (x, y, level) => {
  addMove(x + 1, y + 2, level);
  addMove(x + 2, y + 1, level);
  addMove(x + 2, y - 1, level);
  addMove(x + 1, y - 2, level);
  addMove(x - 1, y - 2, level);
  addMove(x - 2, y - 1, level);
  addMove(x - 2, y + 1, level);
  addMove(x - 1, y + 2, level);
};

const addAllPossible = (level) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === level) {
        addAllMoves(i, j, level + 1);
      }
    }
  }
};

const findPath = (startX, startY, endX, endY) => {
  addMove(startX, startY, 0);
  let index = 0;
  do {
    addAllPossible(index++);
  } while (board[endX][endY] == null);
  return board[endX][endY];
};
