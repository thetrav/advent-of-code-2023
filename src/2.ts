interface Game {
  id: number
  sets: Set[]
}

interface Set {
  red: number
  blue: number
  green: number
}

interface IMap {
  [key: string]: number
}

function parseSet(s: string): Set {
  let set: IMap = {
    red: 0,
    green: 0,
    blue: 0,
  }
  s.trim()
    .split(',')
    .forEach((cubes) => {
      let [count, colour] = cubes.trim().split(' ')
      set[colour] = parseInt(count)
    })
  return {
    red: set.red,
    green: set.green,
    blue: set.blue,
  }
}

export function parse(line: string): Game {
  let [front, back] = line.split(':')
  return {
    id: parseInt(front.split(' ')[1]),
    sets: back.split(';').map(parseSet),
  }
}

export function checkGame(game: Game, bag: Set): boolean {
  for (let set of game.sets) {
    if (set.blue > bag.blue || set.red > bag.red || set.green > bag.green) {
      return false
    }
  }
  return true
}

const add = (a: number, b: number) => a + b

export function checkGamesFor(games: Game[], bag: Set): number {
  return games
    .filter((g) => checkGame(g, bag))
    .map((g) => g.id)
    .reduce(add, 0)
}

export function checkGames(lines: string[]): number {
  return checkGamesFor(lines.map(parse), { red: 12, green: 13, blue: 14 })
}

export function fewestCubes(game: Game): Set {
  const max = Math.max
  const minSet = {
    red: 0,
    green: 0,
    blue: 0,
  }
  for (const set of game.sets) {
    minSet.red = max(set.red, minSet.red)
    minSet.green = max(set.green, minSet.green)
    minSet.blue = max(set.blue, minSet.blue)
  }
  return minSet
}

export function setPower(set: Set): number {
  return set.red * set.blue * set.green
}

export function setPowerSum(set: Set[]): number {
  return set.map(setPower).reduce(add, 0)
}

export function powerGames(lines: string[]): number {
  return lines.map(parse).map(fewestCubes).map(setPower).reduce(add, 0)
}
