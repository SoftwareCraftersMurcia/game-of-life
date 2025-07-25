export class GameOfLife {
  board: string;
  constructor(board: string) {
    this.board = board;
  }

  nextIteration(): string {
    return this.board;
  }
}
