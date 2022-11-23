import { describe, expect, it } from 'vitest'
import { descifrarCodigo } from '../src/02-hackers'

const codigo = '83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108'

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
