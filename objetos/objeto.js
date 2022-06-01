// Object | conjunto de chave e valor
const pessoa = {
    nome: 'Adyson',
    idade: 30,
    curso: 'Sistemas de Informação'
}

console.log(`Meu nome é ${pessoa.nome}`)

// Método
const quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado; // this indica a chave interna lados
    }
}

console.log(quadrado.lados)
console.log(quadrado.area(6))
console.log(quadrado.perimetro(6))

// Método com abreviação na escrita da função | Atualização ES6
const quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado; // this indica a chave interna lados
    }
}

// Math | objeto nativo do JavaScript
Math.PI // 3.14
console.log(Math.random())

// Manipulando Objeto
const menu = {
    background: '#000000',
    color: '#FFFFFF',
    texto() {
        return 'Bora, mestre';
    }
    
}

console.log(menu.background) // Imprime o valor da chave background | Dot Notation Get

menu.padding = '2rem' // Adiciona no objeto menu a chave 'padding' e o valor '2rem' | Dot Notation Set
menu.mensagem = function() { 
    return 'Hello World'
}

console.log(menu.mensagem())
console.log(menu.texto())

// Palavra-Chave this
const medida = {
    altura: 30,
    metadeAltura() {
        return this.altura / 2; // Importante usar o this para manter o escopo, sem o this ele busca a variável global, caso tenha o mesmo nome
    }
}

console.log(medida.metadeAltura())