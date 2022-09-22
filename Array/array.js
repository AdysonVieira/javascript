// Array suporta vários tipo de dados
const instrumentos = ['guitarra', 'baixo', 'bateria']
console.log(instrumentos[1])

const numeros = [10, 12, 8, 40]
console.log(numeros[1])


const aleatorios = ['Oi', [1, 2, 3, {nome: 'Maria', sobrenome: 'Eduarda'}], function andar(nome) {console.log(nome)}]
aleatorios[1][3].nome // acessa o indice 1 que é outro array, acessa o indice 3 que é um objeto, acessa o nome em objeto
aleatorios[2]('Adyson')



// Métodos de Modificação de array do construtor Array

// [].length
aleatorios.length // 3 | retorna a quantidade de itens na array

const frutas = ['maça', 'pêra', ['goiaba', 'laranja']]
frutas.length // 3
frutas[0].length // 4 | retorna a quantidade de caracteres da string
frutas[2][0].length // 6 | retorna a quantidade de caracteres de goiaba

// Array.from()
Array.from() // transforma array-like em uma array

let li = document.querySelectorAll('li') // NodeList
li = Array.from(li) // Array

// Array.isArray()
Array.isArray(numeros) // true | verifica se é array ou não, Nodelist retorna false

// Array.of()
Array.of(10) // cria uma array com o número 10
Array.of(10, 'nome') // cria uma array com o número 10 e nome

// Array()
Array(10) // [,,,,,,,,,,] cria uma array vazia com 10 números
new Array(10)

// [].sort()
instrumentos.sort() // ['baixo', 'bateria', 'guitarra' ] | retorna a array organizada por ordem alfabetica
numeros.sort() // [10, 12, 40, 8] | com números é organizado de numeral em numeral e não pelo valor

// [].push() e [].unshift()
const carros = ['Kia', 'Ferrari', 'Ford']
carros.unshift('Fusca', 'Gol') // 5 | adiciona os itens no começo da array e retorna a quantidade de itens
carros // ['Fusca, 'Gol', 'Kia', 'Ferrari', 'Ford']

carros.push('Monza') // 6 | adiciona no final da array e retorna a quantidade de itens
carros // ['Fusca, 'Gol', 'Kia', 'Ferrari', 'Ford', 'Monza']

// [].shift() e [].pop()
carros.shift() // Fusca | remove o primeiro item da array e retorna ele
carros // ['Gol', 'Kia', 'Ferrari', 'Ford', 'Monza']

carros.pop() // Monza | remove o último item da array e retorna ele
carros // ['Gol', 'Kia', 'Ferrari', 'Ford']

// [].reverse()
carros.reverse() // ['Ford', 'Ferrari', 'Kia', 'Gol'] | inverte a ordem da array

// [].splice(index, remover, item1, item2, ...) | adiciona e itens dentro da array
carros // ['Gol', 'Kia', 'Ferrari', 'Ford']
carros.splice(1, 0, 'Corolla', 'Fusion') // a partir do índice 1 adiciona os itens passados e não remove nenhum | retorna os itens removidos
carros // ['Gol', 'Kia', 'Corolla', 'Fusion', 'Ferrari', 'Ford']

carros.splice(3, 2, 'Logan') // a partir do índice 3 adiciona Logan e remove 2 itens ['Fusion','Ferrari']
carros // ['Gol', 'Kia', 'Corolla', 'Logan', 'Ford']

// [].copyWithin(alvo, inicio, final) | a partir do alvo ele copia
carros // ['Gol', 'Kia', 'Corolla', 'Logan', 'Ford']
carros.copyWithin(2, 0, 2) // ['Gol', 'Kia', 'Gol', 'Kia', 'Ford'] | a partir do indice 2 ele copiou 2 itens para a posição, substitui o valor original

// [].fill(valor, inicio, final) | copia o valor
carros // ['Gol', 'Kia', 'Gol', 'Kia', 'Ford']
carros.fill('Fusca') // ['Fusca', 'Fusca', 'Fusca', 'Fusca', 'Fusca']
carros.fill('Fusca', 2) // ['Gol', 'Kia', 'Fusca', 'Fusca', 'Fusca']
carros.fill('Fusca', 1, 3) // ['Gol', 'Fusca', 'Fusca', 'Kia', 'Ford']


// Métodos de Acesso de array do construtor Array sem modificar