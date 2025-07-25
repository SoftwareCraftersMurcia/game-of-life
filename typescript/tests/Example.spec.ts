import { GameOfLife } from "../src/GameOfLife";

describe("GameOfLifeAcceptanceTest", () => {
  const initialBoard = "...\n...\n...";

  it("nextGeneration with no life", () => {
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe(initialBoard);
  });
});
