import {describe, expect, test} from '@jest/globals'
import {parse} from './1'

describe('samples', () => {
  test('from description', () => {
    expect(parse("1abc2")).toBe(12)
    expect(parse("pqr3stu8vwx")).toBe(38)
    expect(parse("a1b2c3d4e5f")).toBe(15)
    expect(parse("treb7uchet")).toBe(77)
  })
})