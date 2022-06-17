// outerHTML, innerHTML e innerText
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o HTML do elemento
menu.innerHTML; // HTML interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

h1.outerHTML = '<p>Novo Texto</p>'; // substituir a tag h1 pela p
h1.innerHTML = '<p>Novo Texto</p>'; // adiciona o p dentro da tag h1

// Transversing | Como navegar pelo DOM utilizando suas propriedades e métodos
const lista = document.querySelector('.animais-galeria');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todos os li's
lista.querySelector('li:last-child'); // último filho