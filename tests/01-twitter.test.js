import { describe, expect, it } from 'vitest'
import usersFilter from '../src/01-twitter'

describe('Test en reto de twitter de codember', () => {
  it('Should be a function', () => {
    expect(typeof usersFilter).toBe('function')
  })
})
