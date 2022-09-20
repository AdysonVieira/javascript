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
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor)
