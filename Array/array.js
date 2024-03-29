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
carros.splice(2, 0, 'Corolla', 'Fusion') // a partir do índice 1 adiciona os itens passados e não remove nenhum | retorna os itens removidos
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

// [].concat() | concatena arrays
const array1 = ['item1', 'item2']
const array2 = ['item3', 'item4']
const arrayConcat = array1.concat(array2) // ['item1', 'item2', 'item3', 'item4']

const arrayConcat2 = [].concat(array1, array2, 'item5') // ['item1', 'item2', 'item3', 'item4', 'item5']

// [].includes(), [].indexOf(), [].lastIndexOf() | Verifica se contém e retorna
array1.includes('item1') // true | verifica se o valor está incluso na array
array1.indexOf('item1') // 0 | retorna o índice do primeiro item encontrado
array1.LastindexOf('item1') // 0 | retorna o índice do ultimo item encontrado

// [].join(separador) | Junta todos os valores de uma array e retorna uma string
array1.join() // 'item1, item2'
array1.join(' ') // 'item1 item2'
array1.join('-_-') // 'item1-_-item2'

let html = '<h2>Hello World</h2>'
html.split('h2') // ['<', '>Hello World</', '>'] // cria um array com itens separados pelo h2 
html.join('p') // '<p>Hello World</p>'

// [].slice(inicio, final) | retorna os itens da array passados como argumento
carros // ['Gol', 'Kia', 'Gol', 'Kia', 'Ford']
carros.slice(2) // ['Gol', 'Kia', 'Ford'] | retorna a partir do indice 2 até o final da array
carros.slice(1, 4) // ['Kia', 'Gol', 'Kia'] | retorna entre os índices 1 e 4 

const marcas = carros.slice() // ['Gol', 'Kia', 'Gol', 'Kia', 'Ford'] | clona a array


// Arrays e Iterações

// [].forEach(callback(item, index, array)) | executa uma função para cada item da array, callback

marcas.forEach((marca, index, array) => {
    console.log(marca, index, array)
})

const novaMarcas = marcas.forEach((marca, index, array) => {
    return marca, index, array
}) // retorna undefined

// [].map(callback(item, index, array)) | funciona do mesmo modo que o forEach, mas retorna uma nova array com valores atualizados

marcas.map((marca, index, array) => {
    return marca.toUpperCase // retorna uma nova array | precisa usar o return
})

const novaMarcasMap = marcas.map((marca) => {
    return marca.toUpperCase
})

console.log(novaMarcasMap) // ['GOL', 'KIA', 'GOL', 'KIA', 'FORD']
console.log(marcas) // ['Gol', 'Kia', 'Gol', 'Kia', 'Ford']

// Quando usar [].forEach e [].map?
// Quando quiser apenas interagir com os elementos, como adicionar classes, usar o forEach
// Quando precisar de uma nova array com os valores modificados, usar o map

const aulas = [
    {
        nome: 'HTML',
        min: 15
    },
    {
        nome: 'CSS',
        min: 20
    },
    {
        nome: 'JS',
        min: 12
    },
    {
        nome: 'SASS',
        min: 9
    },
]

const tempoAulas = aulas.map((aula) => {
    return aula.min
}) // retorna uma nova array [15, 20, 12, 9]


// [].reduce(callback(acumulador, item, index, array), valorInicialAcumulador) | o acumulador recebe a iteração de cada item

const totalAulas = tempoAulas.reduce((acumulador, aula) => {
    return acumulador + aula
}, 0)

const maiorAula = tempoAulas.reduce((acumulador, aula) => {
    return acumulador > aula ? acumulador : aula
}, 0)

// encadeando um método no outro
const totalTempoAula = aulas.map((aula) => aula.min).reduce((acumulador, min) => acumulador + min, 0)
const maiorTempoAula = aulas.map((aula) => aula.min).reduce((acumulador, min) => acumulador > min ? acumulador : min, 0)
console.log(maiorAula)

// [].reduceRight() | inicia do final da array para o começo
console.log(tempoAulas.reduceRight((acc, aula) => acc + ' ' + aula))
console.log(typeof(10 + ' '))


// [].some() | se algum elemento da iteração for verdadeiro ele retorna true
const frutas = ['banana', 'laranja', 'uva', '']
const some = frutas.some((fruta) => fruta === 'uva') // true
console.log(some)

// [].every() | se algum elemento da iteração for falso ele retorna falso
const every = frutas.every((fruta) => !!fruta)
console.log(every)

// [].find() | retorna o primeiro item verdadeiro buscado
const numeros = [2, 10, 50, 88, 129, 300, 2, 15]
const maiorQue50 = numeros.find(numero => numero > 50) // 88
console.log(maiorQue50)

// [].findIndex() | retorna o índice do primeiro item verdadeiro buscado
const procuraIndice = frutas.findIndex(fruta => fruta === 'uva')
console.log(procuraIndice)

// [].filter() | retorna uma array com todos os itens verdadeiros da iteração
const maiorQue60 = numeros.filter(numero => numero > 60)
console.log(maiorQue60)

const aulas = [
    {
        nome: 'HTML',
        min: 15
    },
    {
        nome: 'CSS',
        min: 20
    },
    {
        nome: 'JS',
        min: 12
    },
    {
        nome: 'SASS',
        min: 9
    },
]

const maiores15 = aulas.filter(aula => aula.min > 15)
console.log(maiores15)