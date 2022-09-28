// function.call(this,) | elementos como ArrayLike, NodeList para iteragir com métodos de Array

const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, (item) => { // filter é método de array, para ser chamado pelo call para uma NodeList
    return item.classList.contains('ativo')
})

// function.apply(this,[arg1, arg2...]) | Funciona como o call, a diferença é que os argumentos são passados através de listas

Math.max(21, 3, 12, 43, 98) // 98

const numeros = [21, 3, 12, 43, 98]
Math.max(numeros) // NaN 

Math.max.apply(null, numeros) // 98 | passamos null quando não precisa do objeto principal para funcionar


// Call vs Apply

const lis = document.querySelectorAll('li')

function mostraAtivo(item) {
    return item.classList.contains('ativo')
}

const filtro1 = Array.prototype.filter.call(li , mostraAtivo)
const filtro2 = Array.prototype.filter.apply(li , [mostraAtivo])


// function.bind(this, arg1, arg2) | não ativa a função

const filtro3 = Array.prototype.filter.bind(li , mostraAtivo)
console.log(filtro3) // mostra apenas que é uma função
console.log(filtro3()) // ativa a função
