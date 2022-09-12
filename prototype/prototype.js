function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    // primeiro procura dentro da função, se não houver, procura no protótipo
    this.andar = function() {
        return ' está andando'
    }
}

const adyson = new Pessoa('Adyson', 31);
const eduarda = new Pessoa('Eduarda', 21)

//Protótipo fica acessível para o objeto, mas não precisa ser sempre reescrito 
Pessoa.prototype.andar = function() { // O método andar() fica disponível para Pessoa
    return this.nome + ' andou'
}

Pessoa.prototype.nadar = 'nadou'

// Construtores Nativos

const pais = 'Brasil';
const cidade = new String('Maceio') // Construtor String
cidade.charAt(0) // Protótipo de String
cidade.length // Protótipo de String

const lista = document.querySelectorAll('li');
const lista2 = Array.prototype.slice.call(lista); // transformando a NodeList em Array | Método antigo

const lista3 = Array.from(lista); // Método novo


// Apenas os métodos do construtor são herdados
[1, 2, 3].slice(); // existe
// [1, 2, 3].from(); // não existe


// Sempre entenda o que está sendo retornado

const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}

// cada retorno tem acesso ao protótipo do seu tipo
carro // retorna Objeto | tem acesso aos protótipos do construtor Object ex .getOwnPropertyNames()
carro.marca; // retorna String | tem acesso aos protótipos do construtor String ex .toUpperCase()
carro.preco; // retorna Number | tem acesso aos protótipos do construtor Number ex .toFixed
carro.andar(); // retorna Boolean | tem acesso aos protótipos do construtor Boolean ex .
carro.andar; // retorna Function | tem acesso aos protótipos do construtor Function ex .bind
