// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
nome: 'Nome pessoa',
idade: 0,
andar() {
    console.log(this.nome + ' andou');
}
}

function Pessoa(nome, idade) {
this.nome = nome
this.idade = idade;
this.andar = () => console.log(this.nome + ' andou')
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const adyson = new Pessoa('Adyson', 31);
adyson.andar()  

const joao = new Pessoa('João', 20);
joao.andar()

const maria = new Pessoa('Maria', 20)
maria.andar()
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elements) {
    this.elements = () => { // retorna a NodeList
        return document.querySelectorAll(elements)
    }
    this.addClass = (classe) => {
        this.elements().forEach(element => { // passa por cada elemento adicionando a classe
            return element.classList.add(classe)
        });
    }
    this.removeClass = (classe) => {
        this.elements().forEach(element => {
            return element.classList.contains(classe) ? element.classList.remove(classe) : alert('a classe não existe') // verifica se a classe existe, 
        });
    }

}