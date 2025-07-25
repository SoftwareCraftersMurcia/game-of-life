import { GameOfLife } from "../src/GameOfLife";

describe("GameOfLifeAcceptanceTest", () => {
  it("3x3 board nextGeneration with no life", () => {
    const initialBoard = "...\n...\n...";
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe(initialBoard);
  });

  it("4x4 board nextGeneration with no life", () => {
    const initialBoard = "....\n....\n....\n....";
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe(initialBoard);
  });

  it("nextGeneration with one cell in the middle dies due to lack of population", () => {
    const gameOfLife = new GameOfLife("...\n.X.\n...");

    expect(gameOfLife.nextGeneration()).toBe("...\n...\n...");
  });

  it.skip("nextGeneration acceptance test", () => {
    const gameOfLife = new GameOfLife(
      "..X........\n" +
      "......X.X..\n" +
      ".......X...\n" +
      ".XXX.......");

    expect(gameOfLife.nextGeneration()).toBe(
      "...........\n" +
      ".......X...\n" +
      ".......X...\n" +
      "..X........");
  });
});
