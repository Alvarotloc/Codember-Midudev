import { describe, expect, it } from 'vitest'
import { getPassword } from '../src/04-password'

describe('Pruebas en la función getPassword en 04-password', () => {
  it('getPassword should be a function', () => {
    expect(typeof getPassword).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof getPassword()).toBe('string')
  })

  it('should return a string which length is 9', () => {
    console.log(getPassword())
    expect(getPassword().length).toBe(9)
  })
})
