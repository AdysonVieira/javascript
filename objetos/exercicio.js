// Crie um objeto com seus dados pessoais
const dadosPessoais = {
    nome: 'Adyson',
    sobrenome: 'Vieira',
    idade: 30
}

// Crie um método no objeto anterior que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
const carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;
console.table(carro)

// Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem
const cachorro = {
    raca: 'labrador',
    cor: 'preta',
    idade: 10,
    latir(generoPessoa) {
        if(generoPessoa === 'homem' || generoPessoa === 'Homem') {
            return true;
        } else {
            return false;
        }
    }
}

console.log(cachorro.latir('Homem'))
