export class GameOfLife {
  board: string[][];
  constructor(board: string) {
    this.board = board.split('\n').map(row => row.split(''));
  }

  nextGeneration(): string {
    return this.board.map(row => row.map(cell => cell === 'X' ? '.' : cell).join('')).join('\n');
  }
}
