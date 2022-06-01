// SELETORES

// Armazenando um elemento em uma constante
const itemList = document.querySelector('li');
const heading1 = document.querySelector('h1');
const linkProdutos = document.querySelector('ul li a');

// Adicionando classe
itemList.classList.add('active');

// Manipulando o estilo
heading1.style.fontSize = '4rem';
heading1.style.color = 'blue';

// Imprimindo o atributo de um elemento
console.log(linkProdutos.href);
console.log(linkProdutos.innerHTML);




// TIPOS DE DADOS

// Concatenando Strings 

const nome = 'Adyson';
const sobrenome = 'Vieira';

console.log(nome + ' ' + sobrenome);

// Expressões matemáticas

let total = 0;
let pontos = 0;

const compras = 200;
const desconto = 12;

total = compras - desconto;
pontos = total / 4;

console.log('Sua compra de ' + total + ' acumulou ' + pontos + ' pontos.')

// Objetos

const filme = {
    nome: 'O Senhor dos Anéis',
    ano: 2001,
    autor: 'J. R. R. Tolkien',
    diretor: 'Peter Jackson'
}

const livro = {
    nome: 'O Senhor dos Anéis',
    ano: 1954,
    autor: 'J. R. R. Tolkien',
}

console.log(filme.nome.toUpperCase())
console.log(String(livro.ano).length)