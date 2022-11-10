import { describe, expect, it } from 'vitest'
import { usersFilter, getUsers } from '../src/01-twitter'

describe('Test en reto de twitter de codember', () => {
  it('usersFilter should be a function', () => {
    expect(typeof usersFilter).toBe('function')
  })

  it('getUsers should be a function', () => {
    expect(typeof getUsers).toBe('function')
  })

  it('getUsers should return an array made of users, the first one must be midudev and there can be no empty spaces', async () => {
    const usuarios = await getUsers()
    expect(Array.isArray(usuarios)).toBe(true)
    expect(usuarios[0]).toBe('usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82')
    expect(usuarios.includes(' ')).toBe(false)
  })

  it('usersFilter should return a counter and the last user', async () => {
    expect(Object.keys(await usersFilter())).toEqual(['contador', 'usuarioFinal'])
  })
})
