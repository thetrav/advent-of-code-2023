import fs from 'node:fs'

import { sumLines } from './1'
import { checkGames } from './2'

function runFile(fileName: string, fn: (line: string[]) => number) {
  const data = fs.readFileSync(fileName, 'utf8')
  const sum = fn(data.split('\n'))
  console.log(`${fileName}: ${sum}`)
}

runFile('./input/1', sumLines)
runFile('./input/2', checkGames)
