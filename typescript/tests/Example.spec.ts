import { GameOfLife } from '../src/GameOfLife'

describe('GameOfLifeAcceptanceTest', () => {
  it('example test', () => {
    const gameOfLife = new GameOfLife()

    expect(gameOfLife.method()).toBe(true)
  })
})
