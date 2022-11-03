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
    set novaFruta(fruta) { // set não é um método, não precisa ativar com os ()
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
    set element(type) {
        this._elementType = type
    }
}

const novoBotao = new Button('Botão', 'black')
novoBotao.element = 'a' // dessa forma é setado o valor
console.log(novoBotao.element) // dessa forma é pegado o valor
