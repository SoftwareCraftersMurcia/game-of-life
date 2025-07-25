import { GameOfLife } from "../src/GameOfLife";

describe("GameOfLifeAcceptanceTest", () => {
  it("nextGeneration with no life", () => {
    const initialBoard = "...\n...\n...";
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe(initialBoard);
  });

  it("nextGeneration with one cell in the middle dies due to lack of population", () => {
    const gameOfLife = new GameOfLife("...\n.X.\n...");

    expect(gameOfLife.nextGeneration()).toBe("...\n...\n...");
  });
});
