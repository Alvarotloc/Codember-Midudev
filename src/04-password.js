export const getPassword = () => {
  const min = 11098
  const max = 98123
  const arrayFinal = []
  for (let i = min; i < max; i++) {
    if (!i.toString().includes('55')) continue

    const arrayOfNumbers = i.toString().split('')
    let comprobante = true

    for (let j = 1; j < arrayOfNumbers.length; j++) {
      if (+arrayOfNumbers[j] < +arrayOfNumbers[j - 1]) {
        comprobante = false
        break
      }
    }
    if (comprobante) {
      arrayFinal.push(i)
    }
  }
  return `${arrayFinal.length}-${arrayFinal[55]}`
}
