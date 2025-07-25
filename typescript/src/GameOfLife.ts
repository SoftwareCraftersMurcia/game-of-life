export class GameOfLife {
  board: string;
  constructor(board: string) {
    this.board = board;
  }

  nextGeneration(): string {
      return "...\n...\n...";
  }
}
