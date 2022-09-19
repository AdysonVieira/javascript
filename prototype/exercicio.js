// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoas.prototype.completo = function() {
    return `${this.nome} ${this.sobrenome}`
}

const adyson = new Pessoas('Adyson', 'Vieira', 31)
adyson.completo()

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// // Qual o construtor do dado abaixo:
li.hidden.constructor.name;