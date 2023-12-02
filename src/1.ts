import fs from 'node:fs'

const digits = ['0','1','2','3','4','5','6','7','8','9']
function isDigit(c: string):boolean {
    for (let d of digits) {
        if (c === d) {
            return true
        }
    }
    return false
}

export function parse(s: string): number {
    var first = ''
    var last = ''
    for (let c of s) {
        if(isDigit(c)) {
            if (first === '') {
                first = c
            }
            last = c
        }
    }
    return parseInt(first + last)
}

export function runFile(fileName: string): number {
    const data = fs.readFileSync(fileName, 'utf8');
    let sum = 0
    for (let line of data.split("\n")) {
        sum += parse(line)
    }
    return sum
}