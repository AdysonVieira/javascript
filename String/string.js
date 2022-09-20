// Construtores de String | toda string possui os métodos e propriedades do proptotype de String

const nome = 'Adyson Vieira Santos' // retorna string
const nome2 = new String('Adyson Vieira') // retorna objeto


// nome.includes(nome, posição)
nome.includes('Vieira') // Verifica se o argumento passado está incluso dentro da string retorna true ou false

nome.charAt(1) // d | retorna qual letra está no índice 1
nome[1] // d | retorna qual letra está no indice 1

nome.length // 13 | retorna a quantidade de caracteres incluindo o espaço 

nome.concat(' Santos') // Adyson Vieira Santos | concatena a string mas não altera o valor de nome

nome.startsWith('Ad') // true | verifica se começa com as letras passadas | case sensitive
nome.endsWith('ra') // true | verifica se termina com as letras passadas | case sensitive

nome.slice(0, 4) // Adys | retorna os caracteres que estão entre os índices passados
nome.slice(4) // on Vieira | retorna os caracteres que estão entre o índice 4 até o final

nome.indexOf('y') // 2 | retorna qual indice está o primeiro caracter passado
nome.lastIndexOf('y') // 2 | retorna qual indice está o ultimo caracter passado

// nome.padStart(quantidade, argumento)
const precos = ['R$99', 'R$199', 'R$11999']

precos.forEach(preco => console.log(preco.padStart(20,'-')))

nome2.repeat(10) // repete a string 10 vezes


// nome.replace(regexp|substring, newString|function)
let preco = "R$599.00"
preco = preco.replace('.', ',')

let listaNome = nome.replace(/[ ]+/g,', ') // troca os espaços em brancos por ', '

const arrayNome = listaNome.split(', ') // divide a string e retorna um array

const html = '<li>Item 1</li>' // string com um html
const splitHtml = html.split('li') // separando tirando a tag li
const joinHtml = splitHtml.join('div') // juntando com div

nome.toLowerCase // adyson vieira santos | tudo em letra minúscula
nome.toUpperCase // ADYSON VIEIRA SANTOS | tudo em letra maiúscula

// let preco = '   500  '
preco.trim() // "500" | remove espaços que possam estar no inicio e no final da string
preco.trimStart() // "500  " | remove espaços que possam estar no inicio e no final da string
preco.trimEnd() // "    500" | remove espaços que possam estar no inicio e no final da string

