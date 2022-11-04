// Função Construtora vs Class

// Função Construtora
// function Button(text, background) {
//     this.text = text
//     this.background = background
// }

// Button.prototype.createElement = () => {
//     const newButton = document.createElement('button')
//     newButton.innerText = this.text
//     newButton.style.background = this.background
//     return newButton
// }
// const botaoCompre = new Button('Compre', 'blue')
// console.log(botaoCompre.createElement())




// Class
class CreateButton {
    constructor(text, background) { // Propriedades são passadas no construtor
        this.text = text
        this.background = background
    }
    createElement() { // método do protótipo
        const newButton = document.createElement('button')
        newButton.innerText = this.text
        newButton.style.background = this.background
        return newButton
    }
    appendTo(target) { // método que adiciona o elemento
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.createElement())
        return targetElement
    }
}

const botaoSair = new CreateButton('Sair', 'red')
botaoSair.appendTo('body')





// Propriedades | Podemos passar qualquer valor dentro de uma propriedade

class ClassButton {
    constructor(options) {
        this.options = options
    }
}

const blueOptions = {
    color: 'white',
    background: 'blue',
    text: 'Clique',
    borderRadius: '4px'
}

const meuBotao = new ClassButton(blueOptions)
console.log(meuBotao)




// Static vs Propotype | Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave Static. Assim como o [].map() é um método de uma array e Array.from é um método construtor Array

class StaticButton {
    constructor(text) {
        this.text = text
    }
    static createBg(background) {
        const elementButton = document.createElement('button')
        elementButton.innerText = 'Botão'
        elementButton.style.background = background
        return elementButton
    }
}

const outroButton = StaticButton.createBg('blue')
console.log(new StaticButton)





// Static | Podemos utilizar o método static para retornar a própria classe com propriedades já pré definidas

class Botao {
    constructor(text, background) {
        this.text = text
        this.background = background
    }
    criaBotao() {
        const botaoElemento = document.createElement('button')
        botaoElemento.innerText = this.text
        botaoElemento.style.background = this.background
        document.body.appendChild(botaoElemento)
        return botaoElemento
    }

    static novoBotao(text) {
        return new Botao(text, 'blue')
    }
}
console.log(Botao.novoBotao('Botão Novinho'))





// get e set | São padrões de objeto que podem ser usados em class

const frutas = {
    lista: [],
    set novaFruta(fruta) { // set e get não precisa ativar com os ()
        this.lista.push(fruta)
    }
}

frutas.novaFruta = 'Morango'
frutas.novaFruta = 'Uva'
console.log(frutas)


class Button {
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    get element() { // get e set tem o mesmo nome
        const type = this._elementType || 'button'
        const buttonElement = document.createElement(type)
        buttonElement.innerText = this.text
        buttonElement.style.color = this.color
        return buttonElement
    }
    set element(type) { // o set precisa ter pelo menos 1 parametro
        this._elementType = type
    }
}

const novoBotao = new Button('Botão', 'black')
novoBotao.element = 'a' // set | dessa forma é setado o valor
console.log(novoBotao.element) // get | dessa forma é pegado o valor






// Extends e Subclasses | É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo

class Veiculo { // Classe mais genérica
    construtor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}

class Moto extends Veiculo {
    empinar(){
        console.log('Moto empinou com ' + this.rodas + ' rodas')
        console.log(this.rodas)
    }
}

const cg160 = new Moto(2)

console.log(cg160.empinar())





// Sobrescrever métodos

class Veiculo { // Classe mais genérica
    construtor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}

class Moto extends Veiculo {
    acelerar() { // sobrescreve o métodos, busca primeiro o método de Moto, mas não apaga o método de veículo
        console.log('Só a moto acelerou')
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas')
        console.log(this.rodas)
    }
}

const titan = new Moto(2)

console.log(titan.acelerar())






// Super | É possível utilizar a palavra chave super para falarmos com a classe pai e acessarmos o seus métodos e propriedades.
class Veiculo {
    constructor(rodas){
        this.rodas = rodas
    }
    acelerar() {
        console.log('Veiculo acelerou')
    }
}

class Moto extends Veiculo {
    acelerar() {
        super.acelerar() // super seria a mesma coisa de usar Veiculo.acelerar()
        console.log('Moto acelerou')
    }
}

const titan = new Moto(2)
console.log(titan.acelerar())


// Super e Constructor
class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas
        this.combustivel = combustivel
    }
    acelerou() {
        console.log('Acelerou')
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel)
        this.capacete = capacete
    }
    acelerar() {
        console.log('Moto ' + this.rodas, this.capacete)
    }
}

const titan = new Moto(2, 'gasolina', true)
console.log(titan.acelerar())