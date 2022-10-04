// Crie uma função que verifique
// corretamente o tipo de dado
const nome = 'Adyson'
const numero = 1
function verificaTipo(argumento) {
    return Object.prototype.toString.call(argumento)
}

console.log(verificaTipo(numero))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        configurable: false,
        writable: false,
        enumerable: false,
        
    }
})

const quadrado = {
    lados: 4
}
Object.freeze(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(Array.prototype)
Object.getOwnPropertyNames(String.prototype)
