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


// function.bind(this, arg1, arg2) | serve para usar métodos e propriedades de outros objetos, ligando eles
const carro = {
    marca: 'Ford',
    ano: '2020',
    acelerar(velocidade, tempo) {
        return `${this.marca} acelerou ${velocidade} em ${tempo} segundos`
    }
}

console.log(carro.acelerar(100, 10))

const honda = {
    marca: 'Honda'
}

const aceleraHonda = carro.acelerar.bind(honda) // usando o método de carro usando outra propriedade de outro objeto
console.log(aceleraHonda(120, 5))




// Function Expression

function somar(a, b) { // declaration | declarada com a palavra chave function
    return a + b
}

const somar = function(a, b) { // expression | declarada dentro de uma variável
    return a + b
}


// Hoisting | Function Expression não sofre o hoisting

console.log(somar(2, 3)) // 5
function somar(a, b) { 
    return a + b
}

console.log(somar(2, 3)) // erro
const somar = function(a, b) {
    return a + b
}

// Arrow functions

const somar = (a, b) => a + b





// Factory Function | São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.

function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        element: element,
        text: text,
    }
}

// a vantagem da factory function é podermos criar métodos e variáveis privadas.
function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`

    function andar() {
        return `${nomeCompleto} andou`
    }

    function nadar() {
        return `${nomeCompleto} nadou`
    }

    return {
        nome,
        sobrenome,
        andar,
        nadar,
    }
}

// Ice Factory | Podemos impedir que os métodos e propriedades seham modificados com o Object.freeze()

'use strict'

function criarPessoa(nome) {
    const nome = nome
    function andar() {
        return `${nome} andou`
    }
    
    return Object.freeze({
        nome,
        andar,
    })
}




// Factory Function vs Constructor Function | uma das vantagens é não precisar iniciar com a palavra new

function Pessoa(nome) {
    if(!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome)
    this.nome = nome
}

Pessoa.prototype.andar = function() {
    return `${nome} andou`
}

const designer = Pessoa('Adyson')
console.log(designer)





// Exemplo Real

function $$(selectedElement) {
    const elements = document.querySelectorAll(selectedElement)

    function hide() {
        elements.forEach( element => {
            element.style.display = 'none'
        })
        return $$(selectedElement)
    }

    function show() {
        elements.forEach(e lement => {
            element.style.display = 'initial'
        })
        return $$(selectedElement)
    }
    
    function on(onEvent, callback) {
        elements.forEach( element => {
            element.addEventLinester(onEvent, callback)
        })
        return $$(selectedElement)
    }

    return {
        hide,
        show,
        on,
    }
}

const elemento = $$('li')
