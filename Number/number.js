let numero = 1.999

console.log(Number.isNaN('string')) // true | Não é um número
console.log(Number.isInteger(numero)) // true | é um número inteiro

console.log(Number.parseFloat('1,5')) // passa uma string com numero para um Number float
console.log(Number.parseInt(99.99, 10)) // passa uma string com numero para um Number integer

// toFixed retorna uma string | usar o + para transformar em number
console.log(+numero.toFixed() + 5) // 2 | arredonda de pra cima ou pra baixo 
console.log(numero.toFixed(2)) // 2.00 | arredonda para 2 casas decimais
console.log(numero.toFixed(1)) // 2.0 | arredonda para 1 casa decimal
console.log((99.90).toFixed()) // 100

// toLocaleString(lang, option)

let valor = 27.09
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 27,09
console.log(valor)

// Math
Math.abs(-5.5) // 5.5 | transforma em valores reais
Math.ceil(5.324) // 6 | transforma em inteiro e sempre arredonda pra cima
Math.round(5.324) // 5 | transforma em inteiro e arredonda
Math.floor(5.324) // 5 | transforma em inteiro e sempre arredonda pra baixo

let numero1 = 1
let numero2 = 2
let numero3 = 2
let numero4 = 2

Math.max(numero1, numero2) // 2 | mostra o maior valor da lista
Math.max(1, 2, 3, 4, 5) // 5 | mostra o maior valor da lista
Math.min(1, 2, 3, 4, 5) // 1 | mostra o menor valor da lista

Math.random() // retorna um número aleatório
const aleatorio = Math.random() * 1000 // retorna um numero entre 0 e 1000
console.log(Math.floor(aleatorio)) // Math.floor para arredondar para baixo e mostrar um número inteiro

// Math.random() * (max - min + 1) + min | Para sortear entre 20 e 40
console.log(Math.floor(Math.random() * (100 - 001 + 1) + 000))

numero1 = Math.floor(Math.random() * 9)
numero2 = Math.floor(Math.random() * 9)
numero3 = Math.floor(Math.random() * 9)
numero4 = Math.floor(Math.random() * 9)
console.log(`A sequência ganhadora é ${numero1}${numero2}${numero3}${numero4}`)