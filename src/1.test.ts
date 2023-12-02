import { describe, expect, test } from '@jest/globals'
import { parse } from './1'

function t(i: string, n: number) {
  test(`${i} == ${n}`, () => {
    expect(parse(i)).toBe(n)
  })
}

function testCases(cases: [string, number][]) {
  for (let c of cases) {
    t(c[0], c[1])
  }
}

describe('day one', () => {
  testCases([
    ['1abc2', 12],
    ['pqr3stu8vwx', 38],
    ['a1b2c3d4e5f', 15],
    ['treb7uchet', 77],
  ])
  testCases([
    ['two1nine', 29],
    ['eightwothree', 83],
    ['abcone2threexyz', 13],
    ['xtwone3four', 24],
    ['4nineeightseven2', 42],
    ['zoneight234', 14],
    ['7pqrstsixteen', 76],
  ])
})
