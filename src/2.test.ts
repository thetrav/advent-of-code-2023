import { describe, expect, test } from '@jest/globals'
import { parse, checkGame, checkGamesFor, fewestCubes, setPowerSum } from './2'
const gameDefs = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
]

const games = gameDefs.map(parse)
const bag = {
  red: 12,
  green: 13,
  blue: 14,
}
const possible = games.map((game) => checkGame(game, bag))

const fewest = games.map(fewestCubes)

describe('day two', () => {
  test('parser', () => {
    expect(games[0].id).toBe(1)
    expect(games[0].sets.length).toBe(3)
    expect(games[0].sets[0]).toEqual({ blue: 3, red: 4, green: 0 })
  })

  test('checker', () => {
    expect(possible).toEqual([true, true, false, false, true])
  })

  test('checkGamesFor', () => {
    expect(checkGamesFor(games, bag)).toBe(8)
  })

  test('fewest cubes', () => {
    expect(fewest[0]).toEqual({ red: 4, green: 2, blue: 6 })
    expect(fewest[1]).toEqual({ red: 1, green: 3, blue: 4 })
    expect(fewest[2]).toEqual({ red: 20, green: 13, blue: 6 })
    expect(fewest[3]).toEqual({ red: 14, green: 3, blue: 15 })
    expect(fewest[4]).toEqual({ red: 6, green: 3, blue: 2 })
  })

  test('powers', () => {
    expect(setPowerSum(fewest)).toBe(2286)
  })
})
