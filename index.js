const prompt = require('prompt-sync')()
const functions = require('./factorial')
const factorial = functions.factorial

let n = prompt('Enter your number: ')
let factorialN = factorial(n)

console.log(factorialN)

console.log('this is really good')
