import { describe, expect, it } from 'vitest'
import { descifrarCodigo } from '../src/02-hackers'

const codigo = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

describe('Tests en 02-hackers', () => {
  it('descifrarCodigo should be a function', () => {
    expect(typeof descifrarCodigo).toBe('function')
  })

  it('descifrarCodigo should receive a string as an argument', () => {
    expect(() => descifrarCodigo()).toThrow()
  })

  it('descifrarCodigo should return a string', () => {
    console.log(descifrarCodigo(codigo))
    expect(typeof descifrarCodigo(codigo)).toBe('string')
  })
})
