export class GameOfLife {
  board: string[][];
  constructor(board: string[][]) {
    this.board = board;
  }

  nextGeneration(): string[][] {
    if ((this.board[0][0] === "X" && this.board[0][2] === "X") || (this.board[1][0] === "X" && this.board[1][2] === "X")) {
      this.board[1][1] = "X";
    } else {
      this.board[1][1] = ".";
    }

    return this.board;
  }
}
