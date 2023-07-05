let fristNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

fristNumber = Number(fristNumber)
secondNumber = Number(secondNumber)

const sum = fristNumber + secondNumber
const sub = fristNumber - secondNumber
const multi = fristNumber * secondNumber
const div = fristNumber / secondNumber
const restdiv = fristNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)