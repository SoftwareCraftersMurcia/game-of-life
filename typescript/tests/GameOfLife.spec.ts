import { GameOfLife } from "../src/GameOfLife";

describe("GameOfLifeAcceptanceTest", () => {
  it("3x3 board nextGeneration with no life", () => {
    const initialBoard = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."]
    ];
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe("...\n...\n...");
  });

  it("4x4 board nextGeneration with no life", () => {
    const initialBoard = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."]
    ];
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe("....\n....\n....\n....");
  });

  it("nextGeneration with one cell in the middle dies due to lack of population", () => {
    const initialBoard = [
      [".", ".", "."],
      [".", "X", "."],
      [".", ".", "."]
    ];
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe("...\n...\n...");
  });

  it.skip("nextGeneration acceptance test", () => {
    const initialBoard = [
      [".", ".", "X", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "X", ".", "X", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "X", ".", ".", "."],
      [".", "X", "X", "X", ".", ".", ".", ".", ".", ".", "."]
    ];
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe(
      "...........\n" + ".......X...\n" + ".......X...\n" + "..X........"
    );
  });

  it("a cell with two neighbors survives", () => {
    const initialBoard = [
      [".", ".", "."],
      ["X", "X", "X"],
      [".", ".", "."]
    ];
    const gameOfLife = new GameOfLife(initialBoard);

    expect(gameOfLife.nextGeneration()).toBe("...\n.X.\n...");
  });
});
