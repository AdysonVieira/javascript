// Qual o resultado da seguinte expressão?
const total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
let a = 'Numero 5',
    b = 10;
console.log(a - b, a * b);

// Somar a string '200' com o número 50 e retornar 250
a = '200';
b = 50;
console.log(+a + b)

// Incremente o numero 5 e retorne o seu valor incrementado
a = 5;
console.log(++a);

// Como dividir o peso por 2?

let numero = '80';
let unidade = 'kg';
let peso = numero + unidade; // '80kg'
console.log(peso);
let pesoPorDois = +numero / 2 + unidade;
console.log(`O peso total é de ${peso}, mas você pode dividir comigo e ficar com ${pesoPorDois} ainda.`)
