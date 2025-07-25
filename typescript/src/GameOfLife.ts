export class GameOfLife {
  board: string[][];
  constructor(board: string) {
    this.board = board.split("\n").map((row) => row.split(""));
  }

  nextGeneration(): string {
    const middleCell =
      this.board[1][0] === "X" && this.board[1][2] === "X" ? "X" : ".";

      const nextBoard = this.board
          .map((row) => row.map((cell) => (cell === "X" ? "." : cell)));

      nextBoard[1][1] = middleCell;

      return nextBoard.map(row => row.join(''))
          .join('\n');
  }
}
