const conseguirCadenaColores = async () => {
  const resp = await fetch('https://codember.dev/colors.txt')
  const arrayColores = await resp.json()
  let contador = 1
  let contadorProvisional = 1
  let colorFinal = ''

  for (let i = 0; i < arrayColores.length; i++) {
    contadorProvisional++
    if (arrayColores[i] === arrayColores[i + 1]) {
      if (contadorProvisional > contador) {
        contador = contadorProvisional
        colorFinal = arrayColores[i]
      }
      contadorProvisional = 1
      continue
    }
    if (arrayColores[i - 2] === undefined || arrayColores[i - 2] !== arrayColores[i]) {
      if (contadorProvisional > contador) {
        contador = contadorProvisional
        colorFinal = arrayColores[i]
      }
      contadorProvisional = 1
      continue
    }
  }
  return `${contador}@${colorFinal}`
}

console.log(await conseguirCadenaColores())
