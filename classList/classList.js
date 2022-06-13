// classList | é uma proriedade que retorna uma lista com as classes de um elemento, permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string com o nome da classe
menu.classList; // lista de classes
menu.classList.add('ativo'); // adiciona a classe 'ativo'
menu.classList.add('ativo', 'mobile'); // adiciona duas classes
menu.classList.remove('ativo'); // remove a classe 'ativo'
menu.classList.toggle('ativo'); // adiciona/remove a classe 'ativo'
menu.classList.contains('ativo'); // verifica se contém 'ativo' e retorna true ou false
menu.classList.replace('ativo', 'inativo'); // substitui o primeiro argumento pelo segundo na classe
