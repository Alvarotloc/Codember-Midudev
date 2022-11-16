const descifrarCodigo = (codigo) => {
  if (typeof codigo !== 'string') throw new Error('codigo must be a string')
  const codigoPorDigito = codigo.split('')

  const codigoFinal = []

  for (let i = 0; i < codigoPorDigito.length; i++) {
    if (codigoPorDigito[i] === '1') {
      const codigoDigito = `${codigoPorDigito[i]}${codigoPorDigito[i + 1]}${codigoPorDigito[i + 2]}`
      const letra = String.fromCharCode(codigoDigito)
      codigoFinal.push(letra)
      i = i + 2
    } else if (codigoPorDigito[i] === '9') {
      const codigoDigito = `${codigoPorDigito[i]}${codigoPorDigito[i + 1]}`
      const letra = String.fromCharCode(codigoDigito)
      codigoFinal.push(letra)
      i = i + 1
    } else if (codigoPorDigito[i] === ' ') {
      codigoFinal.push(codigoPorDigito[i])
    }
  }
  return codigoFinal.join('')
}

export {
  descifrarCodigo
}
