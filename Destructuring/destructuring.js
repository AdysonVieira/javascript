// Destructuring | Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.


// Destructuring Objects
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}

const {marca, ano} = carro // passa as propriedades = ao objeto

console.log(marca) // Fiat
console.log(ano) // 2018



// Vantagens
const cliente = {
    nome: "Adyson",
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            computador:['Monitor', 'CPU']
        }
    }
}

const {livros, videos} = cliente.compras.digitais

console.log(livros[0], videos[1])



// Nesting | É possível aninhar uma desestruturação dentro de outra

const {fisicas, digitais, fisicas: {computador}} = cliente.compras // foram criadas 3 variasveis: fisica, digitais e computador(precisa indicar que ela está no nivel fisicas)



// Nome das Variáveis | É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possivel mudar o nome da variável final

const {nome: nomeCliente} = cliente // nomeCliente agora é igual a cliente.nome


// Podemos atribuir um valor padrão caso a propriedade não exista
const {email: emailCliente} = cliente // undefined
const {email = 'email@email.com'} = cliente // email@email.com

// Caso cliente tenha a propriedade email com valor, ela sobrescreve o valor passado na desestruturação
console.log(email)






// Destructuring Arrays

const frutas = ['Pera', 'Banana', 'Morango']

const [indice1, indice2, indice3] = frutas
console.log(indice1, indice2, indice3)




// Declaração de Variáveis | A desestruturação pode servir para declararmos uma sequêcia de variáveis

const primeiro = 'Item1'
const segundo = 'Item2'
const terceiro = 'Item3'
//ou
const [primeiro, segundo, terceiro] = ['Item1', 'Item2', 'Item3'] // mesma coisa





// Argumento Desestruturado | Se a função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração

function handleKeyboard(event) {
    console.log(event.key)
}
// com Destruturing
function handleKeyboard({key, keyCode, bubble}) { // Desestrutura o objeto event
    console.log(key, keyCode, bubble)
}

document.addEventListener('keyup', handleKeyboard)