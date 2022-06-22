// Manipulação
const animais = document.querySelector('.animais');
const tituloAnimais = animais.querySelector('.titulo');


const contato2 = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo');

tituloAnimais.append(tituloContato)
tituloAnimais.appendChild(tituloContato)

// Manipulando elementos

const galeria = document.querySelector('.animais-galeria')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(galeria); // move a galeria para o final de contato
contato.insertBefore(galeria, titulo); // insere a galeria antes de titulo | titulo é filho de contato
contato.removeChild(titulo); // remove titutlo de contato
contato.replaceChild(galeria, titulo); // substitui titulo por galeria


// Criando novos elementos | createElement()
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);


// Clonando elementos
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo; // titutlo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true)

const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);