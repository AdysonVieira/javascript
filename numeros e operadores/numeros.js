// Inteiros
let numero = 30; 


// Decimais
numero = 3.14


// Números exponenciais
numero = 3e10


numero = 3e-2




// Operadores Aritméticos

let adicao = 100 + 50; // Soma
console.log(adicao);

let subtracao = 100 - 50; // Subtrai
console.log(subtracao);

let multiplicacao = 10 * 5; // Multiplica
console.log(multiplicacao);

let divisao = 100 / 5; // Divide
console.log(divisao);

let expoente = 2 ** 4; // Exponenciação (2 * 2) * 4
console.log(expoente)

let modulo = 14 % 5; // Resto de divisão
console.log(modulo)



// Operações com Strings
numero = '10' + 10; // Soma entre string e number não soma, concatena e vira string


numero = '10' - 5; // Consegue operar entre string e number e retornar number, exceto somar


numero = '10' * '5'; // Consegue operar entre strings se houver apenas números, exceto soma 


numero = 'Isso 10' - 5; // Retorna NaN (Not a Number)




// Ordem das operações binárias
numero = 10 + 20 * 2 / 4; // Primeiro multiplica, depois divide, por fim soma e subtrai
console.log(numero)


// Operações Unárias
numero = 5;
console.log(numero++) // Incrementa o valor após
console.log(numero)
console.log(++numero) // Incrementa antes

console.log(numero--) // Decrementa o valor após
console.log(numero)
console.log(--numero) // Decrementa antes

// Transformando strings em números
 let idade = '30';
 console.log(typeof idade)

//  +idade; // 30 retorna number
//  -idade; // -30 retorna number
//   console.log(typeof +idade, isNaN(idade));

  console.log(+idade - 10)



