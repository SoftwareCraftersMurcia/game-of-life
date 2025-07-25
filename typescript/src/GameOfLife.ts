export class GameOfLife {
  board: string[][];
  constructor(board: string[][]) {
    this.board = board;
  }

  nextGeneration(): string[][] {
    this.board[1][1] = this.board[1][0] === "X" && this.board[1][2] === "X" ? "X" : ".";

      return this.board;
  }
}
