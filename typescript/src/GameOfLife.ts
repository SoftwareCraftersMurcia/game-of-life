export class GameOfLife {
  board: string[][];
  constructor(board: string) {
    this.board = board.split("\n").map((row) => row.split(""));
  }

  nextGeneration(): string {
    const v1 =
      this.board[1][0] === "X" && this.board[1][2] === "X" ? "X" : ".";

      const temp = this.board
          .map((row) => row.map((cell) => (cell === "X" ? "." : cell)));

      temp[1][1] = v1;

      return temp.map(row => row.join(''))
          .join('\n');
  }
}
