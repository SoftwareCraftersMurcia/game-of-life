import { GameOfLife } from "../src/GameOfLife";

describe("GameOfLifeAcceptanceTest", () => {
  const initialBoard = "...\n...\n...";

  it("nextIteration with no life", () => {
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextIteration()).toBe(initialBoard);
  });
});
