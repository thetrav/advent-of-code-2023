import fs from 'node:fs'

interface IMap {
  [key: string]: string
}

const digits: IMap = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  ten: '10',
  eleven: '11',
  twelve: '12',
  thirteen: '13',
  fourteen: '14',
  fifteen: '15',
  sixteen: '16',
  seventeen: '17',
  eighteen: '18',
  nineteen: '19',
  twenty: '20',
}
function digit(index: number, s: string): string | null {
  for (let k in digits) {
    if (s[index] === k) {
      return `${digits[k]}`
    }
    if (s.substring(index).startsWith(k)) {
      return `${digits[k]}`
    }
  }
  return null
}

export function parse(s: string): number {
  var first = ''
  var last = ''
  for (let i = 0; i < s.length; i++) {
    const d = digit(i, s)
    if (d != null) {
      if (first === '') {
        first = d[0]
      }
      last = d[d.length - 1]
    }
  }
  return parseInt(first + last)
}

export function runFile(fileName: string): number {
  const data = fs.readFileSync(fileName, 'utf8')
  let sum = 0
  for (let line of data.split('\n')) {
    sum += parse(line)
  }
  return sum
}
