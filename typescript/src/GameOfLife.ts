export class GameOfLife {
  board: string;
  constructor(board: string) {
    this.board = board;
  }

  nextGeneration(): string {
      return this.board.replace('X', '.');
  }
}
