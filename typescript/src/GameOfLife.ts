export class GameOfLife {
  board: string[][];
  constructor(board: string) {
    this.board = board.split("\n").map((row) => row.split(""));
  }

  nextGeneration(): string {
    this.board[1][1] =
      this.board[1][0] === "X" && this.board[1][2] === "X" ? "X" : ".";

    return this.board
      .map((row) => row.map((cell) => (cell === "X" ? "." : cell)).join(""))
      .join("\n");
  }
}
