const arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const move = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  var answer = 0;
  const block = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      if (item !== 0) {
        if (block[block.length - 1] !== item) {
          block.push(item);
        } else {
          block.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  console.log(answer);
  return answer;
}

solution(arr, move);
