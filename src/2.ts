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

export function checkGamesFor(games: Game[], bag: Set): number {
  let sum = 0
  for (const game of games) {
    if (checkGame(game, bag)) {
      sum += game.id
    }
  }
  return sum
}

export function checkGames(lines: string[]): number {
  return checkGamesFor(lines.map(parse), { red: 12, green: 13, blue: 14 })
}
