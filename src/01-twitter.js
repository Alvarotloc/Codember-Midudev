const getUsers = async () => {
  try {
    const respuesta = await fetch('https://codember.dev/users.txt')
    const usuarios = await respuesta.text()
    const arrayUsuarios = usuarios.split('\n\n')
    return arrayUsuarios
  } catch (error) {
    throw new Error('bad fetch')
  }
}
const usersFilter = async () => {
  const usuarios = await getUsers()
  let contador = 0
  let usuarioFinal
  usuarios.forEach(usuario => {
    if (usuario.includes('usr:') && usuario.includes('eme:') && usuario.includes('psw:') && usuario.includes('age:') && usuario.includes('loc:') && usuario.includes('fll:')) {
      contador += 1
      usuarioFinal = usuario
    }
  })
  return { contador, usuarioFinal }
}
console.log(await usersFilter())
export {
  getUsers,
  usersFilter
}
