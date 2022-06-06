// Dados primitivos com exeção de Object | são dados imutáveis
const nome = 'Adyson'; // String
const numero = 27; // Number
const possuiNome = true // Boolean | true or false
let indefinido; // Undefined
const nulo = null; // Null
const objeto = {} // Object

console.log(typeof nome, typeof numero, typeof possuiNome, typeof indefinido, typeof nulo, typeof objeto)

// Manipulando esses dados
 console.log(nome + numero) // Concatena string e number, o retorno é uma string

 // Template String
  console.log(`Meu amigo ${nome} tem ${numero + 3} anos de idade`) // Usa-se a string entre crases "`" e ${} para imprimir o valor de uma variável ou expressão

  const frase = `${nome} fez ${numero} gols em um único jogo`;
  console.log(frase)
